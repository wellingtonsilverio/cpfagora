import CPFModel from "../models/cpf.model";
import CNPJModel from "../models/cnpj.model";
import UserModel from "../models/user.model";
import { sucessResponse, failureResponse, errorResponse } from "../modules/responses";
import { validarCPF, validarCNPJ } from "../modules/functions/validate";
import * as request from "request";
import * as moment from "moment";

const CONTROLLER: number = 1;

export const getCPF = async (req: any, res: any) => {
    await checkCpfOrCnpj(res, req.params.cpfcnpj, req.params._user);
};

const checkCpfOrCnpj = async (res: any, cpfcnpj: string, _user: string) => {
    const _cpf: string = await validarCPF(cpfcnpj);
    if (_cpf) {
        try {
            const cpf: any = await CPFModel.findOne({ cpf: _cpf });
            if (cpf) {
                sucessResponse(res, cpf);
            } else {
                if (_user) {
                    try {
                        await getUserByIdAndSaveCpf(res, _user, _cpf);
                    } catch (error) {
                        errorResponse(res, CONTROLLER, 3, error);
                    }
                } else return failureResponse(res, CONTROLLER, 7, { error: "Não temos dados desse CPF." });
            }
        } catch (error) {
            errorResponse(res, CONTROLLER, 1, error);
        }
    } else {
        const _cnpj: string = await validarCNPJ(cpfcnpj);
        if (_cnpj) {
            try {
                const cnpj: any = await CNPJModel.findOne({ cnpj: _cnpj });

                if (cnpj) {
                    return sucessResponse(res, cnpj);
                } else {
                    getCNPJofReceitaws(_cnpj, async (error: any, receitaws: any) => {
                        if (error) return errorResponse(res, CONTROLLER, 4, error);

                        const data = await CNPJModel.create(receitaws);
                        return sucessResponse(res, data);
                    });
                }
            } catch (error) {
                errorResponse(res, CONTROLLER, 2, error);
            }
        } else {
            failureResponse(res, CONTROLLER, 6, { error: "CPF/CNPJ invalido." });
        }
    }
}

const getUserByIdAndSaveCpf = async (res: any, _user: string, cpf: string) => {
    const user: any = await UserModel.findOne({ _id: _user });

    if (!user) {
        return failureResponse(res, CONTROLLER, 8, { error: "Não temos dados desse CPF." });
    } else {
        const CPFCNPJ_KEY = user.cpfcnpj_api;
        getCPFofCPFCNPJ(CPFCNPJ_KEY, cpf, async (error: any, cpfcnpj: any) => {
            if (error) return errorResponse(res, CONTROLLER, 5, error);

            const data = await CPFModel.create(cpfcnpj);
            return sucessResponse(res, data);
        });
    }
}

const getCPFofCPFCNPJ = (CPFCNPJ_KEY: any, cpf: any, callback: any) => {
    request({
        url: `${process.env.CPFCNPJ_API}/${CPFCNPJ_KEY}/7/json/${cpf}`,
        timeout: 5000
    }, async (error: any, resp: any) => {
        if (error) {
            console.log({ error });
            if (error.code == "ETIMEDOUT" || error.code == "ESOCKETTIMEDOUT") console.log("-------------------------ETIMEDOUT-------------------------");
            callback(error, null);
        } else if (resp && resp.statusCode == 200) {
            const cpfcnpj = {
                ...JSON.parse(resp.body),
                cpf
            };

            cpfcnpj.nascimento = moment(cpfcnpj.nascimento, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();

            cpfcnpj.pacoteUsado = undefined;
            cpfcnpj.saldo = undefined;
            cpfcnpj.consultaID = undefined;
            cpfcnpj.delay = undefined;

            callback(null, cpfcnpj);
        } else callback({
            statusCode: resp.statusCode,
            error: "CPF não encontrado ou conexão com o DB falhou."
        }, null);
    });
}

const getCNPJofReceitaws = (cnpj: string, callback: any) => {
    request(`${process.env.RECEITAWS_API}/${cnpj}`, async (error: any, resp: any) => {
        if (error) {
            console.log({ error });
            callback(error, null);
        }
        if (resp && resp.statusCode == 200) {
            const receitaws = {
                ...JSON.parse(resp.body),
                cnpj
            };

            receitaws.data_situacao = moment(receitaws.data_situacao, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();
            receitaws.abertura = moment(receitaws.abertura, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();
            if (receitaws.atividade_principal && receitaws.atividade_principal.length > 0) receitaws.atividade_principal = await receitaws.atividade_principal.map((atividades: any) => {
                return {
                    name: atividades.text,
                    code: atividades.code
                }
            });
            if (receitaws.atividades_secundarias && receitaws.atividades_secundarias.length > 0) receitaws.atividades_secundarias = await receitaws.atividades_secundarias.map((atividades: any) => {
                return {
                    name: atividades.text,
                    code: atividades.code
                }
            });
            callback(null, receitaws);
        } else callback({
            statusCode: resp.statusCode,
            error: "CNPJ não encontrado ou conexão com o DB falhou."
        }, null);
    });
}