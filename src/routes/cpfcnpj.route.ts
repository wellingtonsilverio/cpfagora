import CPFModel from "../models/cpf.model";
import CNPJModel from "../models/cnpj.model";
import UserModel from "../models/user.model";
import { sucessResponse, failureResponse, errorResponse } from "../modules/responses";
import { validarCPF, validarCNPJ } from "../modules/functions/validate";
import * as request from "request";
import * as moment from "moment";

const CONTROLLER = 1;

const getCPF = async (req: any, res: any) => {
    await checkCpfOrCnpj(res, req.params.cpfcnpj, req.params._user);
};

module.exports = {
    getCPF
};

const getCPFofCPFCNPJ = (CPFCNPJ_KEY: any, cpf: any, callback: any) => {
    request({
        url: `${process.env.CPFCNPJ_API}/${CPFCNPJ_KEY}/7/json/${cpf}`,
        timeout: 1000
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

const getCNPJofReceitaws = (cnpj: any, callback: any) => {
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
            if (receitaws.atividade_principal.length > 0) receitaws.atividade_principal = await receitaws.atividade_principal.map((atividades: any) => {
                return {
                    name: atividades.text,
                    code: atividades.code
                }
            });
            if (receitaws.atividades_secundarias.length > 0) receitaws.atividades_secundarias = await receitaws.atividades_secundarias.map((atividades: any) => {
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

const checkCpfOrCnpj = async (res: any, cpfcnpj: string, _user: string) => {
    const cpf = await validarCPF(cpfcnpj);
    if (cpf) {
        CPFModel.findOne({ cpf })
            .then(async (_cpf: any) => {
                if (_cpf) {
                    sucessResponse(res, _cpf);
                } else {
                    if (_user) {
                        UserModel.findOne({ _id: _user })
                            .then((user: any) => {
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
                            })
                            .catch((error: any) => errorResponse(res, CONTROLLER, 3, error));
                    } else return failureResponse(res, CONTROLLER, 7, { error: "Não temos dados desse CPF." });
                }
            })
            .catch((error: any) => errorResponse(res, CONTROLLER, 1, error));
    } else {
        const cnpj = await validarCNPJ(cpfcnpj);
        if (cnpj) {
            CNPJModel.findOne({ cnpj })
                .then(async (_cnpj: any) => {
                    if (_cnpj) {
                        return sucessResponse(res, _cnpj);
                    } else {
                        getCNPJofReceitaws(cnpj, async (error: any, receitaws: any) => {
                            if (error) return errorResponse(res, CONTROLLER, 4, error);

                            const data = await CNPJModel.create(receitaws);
                            return sucessResponse(res, data);
                        });
                    }
                })
                .catch((error: any) => errorResponse(res, CONTROLLER, 2, error));
        } else {
            // ERROR
            failureResponse(res, CONTROLLER, 6, { error: "CPF/CNPJ invalido." });
        }
    }
}