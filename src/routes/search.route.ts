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
        const _cnpj = await getCNPJ(res, cnpj);

        return sucessResponse(res, _cnpj);
    } else {
        return failureResponse(res, CONTROLLER, 6, { error: "CPF/CNPJ invalido." });
    }
};

const getCPF = async (res: any, cpf: string, _user: any) => {
    try {
        const _cpf: any = await getFreeCPF(res, cpf,_user);

        if (_cpf) {
            return sucessResponse(res, _cpf);
        } else {
            if (_user) {
                try {
                    await getUserByIdAndSaveCpf(res, _user, cpf);
                } catch (error) {
                    return errorResponse(res, CONTROLLER, 3, error);
                }
            } else return failureResponse(res, CONTROLLER, 7, { error: "Não temos dados desse CPF disponível na conta Free." });
        }
    } catch (error) {
        return errorResponse(res, CONTROLLER, 1, error);
    }
};

const getFreeCPF = async (res: any, cpf: string, _user: string) => {
    const user: any = await UserModel.findOne({ _id: _user });

    if (!user) {
        return failureResponse(res, CONTROLLER, 9, { error: "Não temos dados desse Usuário." });
    } else {
        if (user.balance > 0) {
            await getCPFCNPJKeyByScore();

            const data = await CPFModel.findOne({ cpf });

            if (!data) return data;

            await saveCPFCNPJCreditBalance(null, null, _user);

            return sucessResponse(res, data);
        } else return failureResponse(res, CONTROLLER, 9, { error: "Créditos Insuficientes." });
    }
}

const getUserByIdAndSaveCpf = async (res: any, _user: string, cpf: string) => {
    const user: any = await UserModel.findOne({ _id: _user });

    if (!user) {
        return failureResponse(res, CONTROLLER, 8, { error: "Não temos dados desse Usuário." });
    } else {
        if (user.balance > 0) {
            try {
                const CPFCNPJKey = await getCPFCNPJKeyByScore();

                const cpfcnpj = await getCPFofCPFCNPJ(res, CPFCNPJKey, cpf, _user);

                const data = await CPFModel.create(cpfcnpj);

                return sucessResponse(res, data);
            } catch (error) {
                return errorResponse(res, CONTROLLER, 5, error);
            }
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

export const getCPFofCPFCNPJ = (res: any, CPFCNPJ_KEY: any, cpf: string, _user: string) => {
    const url = `${process.env.CPFCNPJ_API}/${CPFCNPJ_KEY}/7/json/${cpf}`;
    return new Promise((resolve: any, reject: any) => {
        request({
            url: url,
            timeout: MAX_TIMEOUT
        }, async (error: any, resp: any) => {
            if (error) {
                if (error.code == "ETIMEDOUT" || error.code == "ESOCKETTIMEDOUT") {
                    console.log("ETIMEDOUT");
                    nextRequestCPF(cpf);
                    reject(error); // Remover após implementar nextRequestCPF
                } else {
                    console.log({ error });
                    reject(error);
                }
            } else if (resp && resp.statusCode == 200) {
                const cpfcnpjResponse = JSON.parse(resp.body);
                const cpfcnpj = {
                    ...cpfcnpjResponse,
                    cpf
                };
                
                await saveCPFCNPJCreditBalance(CPFCNPJ_KEY, cpfcnpj.saldo, _user);
    
                resolve(formatCPFCNPJ(cpfcnpj));
            } else if (resp && resp.statusCode == 402) {
                await saveCPFCNPJCreditBalance(CPFCNPJ_KEY, 0);
    
                await getUserByIdAndSaveCpf(res, _user, cpf);
            } else reject({
                statusCode: resp.statusCode,
                error: "CPF não encontrado ou conexão com o DB falhou."
            });
        });
    });
};

const nextRequestCPF = (cpf: string) => {
    // TODO
};

const saveCPFCNPJCreditBalance = async (cpfcnpj: string, balance: number, _user?: string) => {
    if (cpfcnpj) await CPFCNPJKeyModel.findOneAndUpdate({ key: cpfcnpj }, { balance, accessedAt: moment().toDate() }).exec();
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
            return _cnpj;
        } else {
            const receitaws = await getCNPJofReceitaws(cnpj);

            return await CNPJModel.create(receitaws);
        }
    } catch (error) {
        return errorResponse(res, CONTROLLER, 2, error);
    }
};

const getCNPJofReceitaws = (cnpj: string) => {
    return new Promise((resolve: any, reject: any) => {
        request({
            url: `${process.env.RECEITAWS_API}/${cnpj}`,
            timeout: MAX_TIMEOUT
        }, async (error: any, resp: any) => {
            if (error) {
                console.log({ error });
                reject(error);
            }
            if (resp && resp.statusCode == 200) {
                const receitaws = JSON.parse(resp.body);
                receitaws.cnpj = cnpj;
                
                resolve(await formatReceitaws(receitaws));
            } else reject({
                statusCode: resp.statusCode,
                error: "CNPJ não encontrado ou conexão com o DB falhou."
            });
        });
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