"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_model_1 = require("../models/cpf.model");
const cnpj_model_1 = require("../models/cnpj.model");
const user_model_1 = require("../models/user.model");
const responses_1 = require("../modules/responses");
const validate_1 = require("../modules/functions/validate");
const request = require("request");
const moment = require("moment");
const CONTROLLER = 1;
const getCPF = (req, res) => __awaiter(this, void 0, void 0, function* () {
    yield checkCpfOrCnpj(res, req.params.cpfcnpj, req.params._user);
});
module.exports = {
    getCPF
};
const getCPFofCPFCNPJ = (CPFCNPJ_KEY, cpf, callback) => {
    request({
        url: `${process.env.CPFCNPJ_API}/${CPFCNPJ_KEY}/7/json/${cpf}`,
        timeout: 1000
    }, (error, resp) => __awaiter(this, void 0, void 0, function* () {
        if (error) {
            console.log({ error });
            if (error.code == "ETIMEDOUT" || error.code == "ESOCKETTIMEDOUT")
                console.log("-------------------------ETIMEDOUT-------------------------");
            callback(error, null);
        }
        else if (resp && resp.statusCode == 200) {
            const cpfcnpj = Object.assign({}, JSON.parse(resp.body), { cpf });
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
    }));
};
const getCNPJofReceitaws = (cnpj, callback) => {
    request(`${process.env.RECEITAWS_API}/${cnpj}`, (error, resp) => __awaiter(this, void 0, void 0, function* () {
        if (error) {
            console.log({ error });
            callback(error, null);
        }
        if (resp && resp.statusCode == 200) {
            const receitaws = Object.assign({}, JSON.parse(resp.body), { cnpj });
            receitaws.data_situacao = moment(receitaws.data_situacao, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();
            receitaws.abertura = moment(receitaws.abertura, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();
            if (receitaws.atividade_principal.length > 0)
                receitaws.atividade_principal = yield receitaws.atividade_principal.map((atividades) => {
                    return {
                        name: atividades.text,
                        code: atividades.code
                    };
                });
            if (receitaws.atividades_secundarias.length > 0)
                receitaws.atividades_secundarias = yield receitaws.atividades_secundarias.map((atividades) => {
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
    }));
};
const checkCpfOrCnpj = (res, cpfcnpj, _user) => __awaiter(this, void 0, void 0, function* () {
    const cpf = yield validate_1.validarCPF(cpfcnpj);
    if (cpf) {
        cpf_model_1.default.findOne({ cpf })
            .then((_cpf) => __awaiter(this, void 0, void 0, function* () {
            if (_cpf) {
                responses_1.sucessResponse(res, _cpf);
            }
            else {
                if (_user) {
                    user_model_1.default.findOne({ _id: _user })
                        .then((user) => {
                        if (!user) {
                            return responses_1.failureResponse(res, CONTROLLER, 8, { error: "Não temos dados desse CPF." });
                        }
                        else {
                            const CPFCNPJ_KEY = user.cpfcnpj_api;
                            getCPFofCPFCNPJ(CPFCNPJ_KEY, cpf, (error, cpfcnpj) => __awaiter(this, void 0, void 0, function* () {
                                if (error)
                                    return responses_1.errorResponse(res, CONTROLLER, 5, error);
                                const data = yield cpf_model_1.default.create(cpfcnpj);
                                return responses_1.sucessResponse(res, data);
                            }));
                        }
                    })
                        .catch((error) => responses_1.errorResponse(res, CONTROLLER, 3, error));
                }
                else
                    return responses_1.failureResponse(res, CONTROLLER, 7, { error: "Não temos dados desse CPF." });
            }
        }))
            .catch((error) => responses_1.errorResponse(res, CONTROLLER, 1, error));
    }
    else {
        const cnpj = yield validate_1.validarCNPJ(cpfcnpj);
        if (cnpj) {
            cnpj_model_1.default.findOne({ cnpj })
                .then((_cnpj) => __awaiter(this, void 0, void 0, function* () {
                if (_cnpj) {
                    return responses_1.sucessResponse(res, _cnpj);
                }
                else {
                    getCNPJofReceitaws(cnpj, (error, receitaws) => __awaiter(this, void 0, void 0, function* () {
                        if (error)
                            return responses_1.errorResponse(res, CONTROLLER, 4, error);
                        const data = yield cnpj_model_1.default.create(receitaws);
                        return responses_1.sucessResponse(res, data);
                    }));
                }
            }))
                .catch((error) => responses_1.errorResponse(res, CONTROLLER, 2, error));
        }
        else {
            // ERROR
            responses_1.failureResponse(res, CONTROLLER, 6, { error: "CPF/CNPJ invalido." });
        }
    }
});
//# sourceMappingURL=cpfcnpj.route.js.map