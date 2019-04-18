import { CPFModel } from "../models/cpf.model";
import { CNPJModel } from "../models/cnpj.model";
import { UserModel } from "../models/user.model";
import { sucessResponse, failureResponse, errorResponse } from "../modules/responses";
import { validarCPF, validarCNPJ } from "../modules/functions/validate";
import * as request from "request";
import * as moment from "moment";
import { CPFCNPJKeyModel } from "../models/cpfcnpjkey.model";
import { ICPFCNPJKey } from "../interfaces/cpfcnpjkey.interface";

const CONTROLLER: number = 1;
const MAX_TIMEOUT = 4000;

export const getCPFOrCNPJ = async (req: any, res: any) => {
    await checkCpfOrCnpj(res, req.params.cpfcnpj, req.params._user);
};

const checkCpfOrCnpj = async (res: any, cpfcnpj: string, _user: string) => {
    let cpf: string;
    let cnpj: string;

    if (cpf = await validarCPF(cpfcnpj)) {
        await getCPF(res, cpf, _user);
    } else if (cnpj = await validarCNPJ(cpfcnpj)) {
        await getCNPJ(res, cnpj);
    } else {
        failureResponse(res, CONTROLLER, 6, { error: "CPF/CNPJ invalido." });
    }
};

const getCPF = async (res: any, cpf: string, _user: any) => {
    try {
        const _cpf: any = await CPFModel.findOne({ cpf: cpf });

        if (_cpf) {
            sucessResponse(res, _cpf);
        } else {
            if (_user) {
                try {
                    await getUserByIdAndSaveCpf(res, _user, cpf);
                } catch (error) {
                    errorResponse(res, CONTROLLER, 3, error);
                }
            } else return failureResponse(res, CONTROLLER, 7, { error: "Não temos dados desse CPF disponível na conta Free." });
        }
    } catch (error) {
        errorResponse(res, CONTROLLER, 1, error);
    }
};

const getUserByIdAndSaveCpf = async (res: any, _user: string, cpf: string) => {
    const user: any = await UserModel.findOne({ _id: _user });

    if (!user) {
        return failureResponse(res, CONTROLLER, 8, { error: "Não temos dados desse Usuário." });
    } else {
        if (user.balance > 0) {
            const CPFCNPJKey = await getCPFCNPJKeyByScore();

            
            getCPFofCPFCNPJ(res, CPFCNPJKey, cpf, _user, async (error: any, cpfcnpj: any) => {
                if (error) return errorResponse(res, CONTROLLER, 5, error);

                const data = await CPFModel.create(cpfcnpj);

                return sucessResponse(res, data);
            });
        } else return failureResponse(res, CONTROLLER, 8, { error: "Créditos Insuficientes." });
    }
};

export const getCPFCNPJKeyByScore = async () => {
    const millisegInDay = (24 * 60 * 60 * 1000);
    const keys: ICPFCNPJKey[] = await CPFCNPJKeyModel.find();

    let bestKey = {
        key: "",
        score: 0
    }

    let key: ICPFCNPJKey;
    for (key of keys) {
        const score: number = key.balance + ((moment().diff(key.accessedAt) / millisegInDay) * 120);

        if (bestKey.score < score) {
            bestKey.key = key.key;
            bestKey.score = score;
        }
    }
    
    return bestKey.key;
};

export const getCPFofCPFCNPJ = (res: any, CPFCNPJ_KEY: any, cpf: string, _user: string, callback: any) => {
    const url = `${process.env.CPFCNPJ_API}/${CPFCNPJ_KEY}/7/json/${cpf}`;
    request({
        url: url,
        timeout: MAX_TIMEOUT
    }, async (error: any, resp: any) => {
        if (error) {
            if (error.code == "ETIMEDOUT" || error.code == "ESOCKETTIMEDOUT") {
                console.log("ETIMEDOUT");
                nextRequestCPF(cpf);
                callback(error, null); // Remover após implementar nextRequestCPF
            } else {
                console.log({ error });
                callback(error, null);
            }
        } else if (resp && resp.statusCode == 200) {
            const cpfcnpjResponse = JSON.parse(resp.body);
            const cpfcnpj = {
                ...cpfcnpjResponse,
                cpf
            };
            
            await saveCPFCNPJCreditBalance(CPFCNPJ_KEY, cpfcnpj.saldo, _user);

            callback(null, formatCPFCNPJ(cpfcnpj));
        } else if (resp && resp.statusCode == 402) {
            await saveCPFCNPJCreditBalance(CPFCNPJ_KEY, 0);

            await getUserByIdAndSaveCpf(res, _user, cpf);
        } else callback({
            statusCode: resp.statusCode,
            error: "CPF não encontrado ou conexão com o DB falhou."
        }, null);
    });
};

const nextRequestCPF = (cpf: string) => {
    // TODO
};

const saveCPFCNPJCreditBalance = async (cpfcnpj: string, balance: number, _user?: string) => {
    await CPFCNPJKeyModel.findOneAndUpdate({ key: cpfcnpj }, { balance, accessedAt: moment().toDate() }).exec();
    if (_user) await UserModel.findByIdAndUpdate(_user, { $inc: { "balance": -1 } }).exec();
};

const formatCPFCNPJ = (cpfcnpj: any) => {
    cpfcnpj.nascimento = moment(cpfcnpj.nascimento, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();
    cpfcnpj.pacoteUsado = undefined;
    cpfcnpj.saldo = undefined;
    cpfcnpj.consultaID = undefined;
    cpfcnpj.delay = undefined;

    return cpfcnpj;
};

export const getCNPJ = async (res: any, cnpj: string) => {
    try {
        const _cnpj: any = await CNPJModel.findOne({ cnpj: cnpj });

        if (_cnpj) {
            return sucessResponse(res, _cnpj);
        } else {
            getCNPJofReceitaws(cnpj, async (error: any, receitaws: any) => {
                if (error) return errorResponse(res, CONTROLLER, 4, error);

                const data = await CNPJModel.create(receitaws);
                return sucessResponse(res, data);
            });
        }
    } catch (error) {
        errorResponse(res, CONTROLLER, 2, error);
    }
};

const getCNPJofReceitaws = (cnpj: string, callback: any) => {
    request({
        url: `${process.env.RECEITAWS_API}/${cnpj}`,
        timeout: MAX_TIMEOUT
    }, async (error: any, resp: any) => {
        if (error) {
            console.log({ error });
            callback(error, null);
        }
        if (resp && resp.statusCode == 200) {
            const receitaws = {
                ...JSON.parse(resp.body),
                cnpj
            };

            callback(null, await formatReceitaws(receitaws));
        } else callback({
            statusCode: resp.statusCode,
            error: "CNPJ não encontrado ou conexão com o DB falhou."
        }, null);
    });
};

const formatReceitaws = async (receitaws: any) => {
    receitaws.data_situacao = moment(receitaws.data_situacao, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();
    receitaws.abertura = moment(receitaws.abertura, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();

    if (isArrayNotEmpty(receitaws.atividade_principal))
        receitaws.atividade_principal = await formatActivity(receitaws.atividade_principal);
    if (isArrayNotEmpty(receitaws.atividades_secundarias))
        receitaws.atividades_secundarias = await formatActivity(receitaws.atividades_secundarias);

    return receitaws;
};

const isArrayNotEmpty = (array: any[]) => {
    return array && array.length > 0;
}

const formatActivity = async (activity: any) => {
    return await activity.map((atividades: any) => {
        return {
            name: atividades.text,
            code: atividades.code
        }
    });
};