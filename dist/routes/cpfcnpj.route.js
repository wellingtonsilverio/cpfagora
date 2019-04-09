"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_model_1 = require("../models/cpf.model");
const cnpj_model_1 = require("../models/cnpj.model");
const user_model_1 = require("../models/user.model");
const responses_1 = require("../modules/responses");
const validate_1 = require("../modules/functions/validate");
const request = require("request");
const moment = require("moment");
const CONTROLLER = 1;
exports.getCPF = async (req, res) => {
    await checkCpfOrCnpj(res, req.params.cpfcnpj, req.params._user);
};
const checkCpfOrCnpj = async (res, cpfcnpj, _user) => {
    const _cpf = await validate_1.validarCPF(cpfcnpj);
    if (_cpf) {
        try {
            const cpf = await cpf_model_1.default.findOne({ cpf: _cpf });
            if (cpf) {
                responses_1.sucessResponse(res, cpf);
            }
            else {
                if (_user) {
                    try {
                        await getUserByIdAndSaveCpf(res, _user, _cpf);
                    }
                    catch (error) {
                        responses_1.errorResponse(res, CONTROLLER, 3, error);
                    }
                }
                else
                    return responses_1.failureResponse(res, CONTROLLER, 7, { error: "Não temos dados desse CPF." });
            }
        }
        catch (error) {
            responses_1.errorResponse(res, CONTROLLER, 1, error);
        }
    }
    else {
        const _cnpj = await validate_1.validarCNPJ(cpfcnpj);
        if (_cnpj) {
            try {
                const cnpj = await cnpj_model_1.default.findOne({ cnpj: _cnpj });
                if (cnpj) {
                    return responses_1.sucessResponse(res, cnpj);
                }
                else {
                    getCNPJofReceitaws(_cnpj, async (error, receitaws) => {
                        if (error)
                            return responses_1.errorResponse(res, CONTROLLER, 4, error);
                        const data = await cnpj_model_1.default.create(receitaws);
                        return responses_1.sucessResponse(res, data);
                    });
                }
            }
            catch (error) {
                responses_1.errorResponse(res, CONTROLLER, 2, error);
            }
        }
        else {
            responses_1.failureResponse(res, CONTROLLER, 6, { error: "CPF/CNPJ invalido." });
        }
    }
};
const getUserByIdAndSaveCpf = async (res, _user, cpf) => {
    const user = await user_model_1.default.findOne({ _id: _user });
    if (!user) {
        return responses_1.failureResponse(res, CONTROLLER, 8, { error: "Não temos dados desse CPF." });
    }
    else {
        const CPFCNPJ_KEY = user.cpfcnpj_api;
        getCPFofCPFCNPJ(CPFCNPJ_KEY, cpf, async (error, cpfcnpj) => {
            if (error)
                return responses_1.errorResponse(res, CONTROLLER, 5, error);
            const data = await cpf_model_1.default.create(cpfcnpj);
            return responses_1.sucessResponse(res, data);
        });
    }
};
const getCPFofCPFCNPJ = (CPFCNPJ_KEY, cpf, callback) => {
    request({
        url: `${process.env.CPFCNPJ_API}/${CPFCNPJ_KEY}/7/json/${cpf}`,
        timeout: 5000
    }, async (error, resp) => {
        if (error) {
            console.log({ error });
            if (error.code == "ETIMEDOUT" || error.code == "ESOCKETTIMEDOUT")
                console.log("-------------------------ETIMEDOUT-------------------------");
            callback(error, null);
        }
        else if (resp && resp.statusCode == 200) {
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
        }
        else
            callback({
                statusCode: resp.statusCode,
                error: "CPF não encontrado ou conexão com o DB falhou."
            }, null);
    });
};
const getCNPJofReceitaws = (cnpj, callback) => {
    request(`${process.env.RECEITAWS_API}/${cnpj}`, async (error, resp) => {
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
            if (receitaws.atividade_principal && receitaws.atividade_principal.length > 0)
                receitaws.atividade_principal = await receitaws.atividade_principal.map((atividades) => {
                    return {
                        name: atividades.text,
                        code: atividades.code
                    };
                });
            if (receitaws.atividades_secundarias && receitaws.atividades_secundarias.length > 0)
                receitaws.atividades_secundarias = await receitaws.atividades_secundarias.map((atividades) => {
                    return {
                        name: atividades.text,
                        code: atividades.code
                    };
                });
            callback(null, receitaws);
        }
        else
            callback({
                statusCode: resp.statusCode,
                error: "CNPJ não encontrado ou conexão com o DB falhou."
            }, null);
    });
};
//# sourceMappingURL=cpfcnpj.route.js.map