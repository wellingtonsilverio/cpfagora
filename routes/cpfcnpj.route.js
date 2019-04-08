const CPFModel = require('../models/cpf.model');
const CNPJModel = require('../models/cnpj.model');
const UserModel = require('../models/user.model');
const response = require('../modules/responses');
const validate = require('../modules/functions/validate'); 
const env = require('../config/env');
const request = require('request');
const moment = require('moment');

const CONTROLLER = 1;

const getCPF = async (req, res) => {
    await checkCpfOrCnpj(req.params.cpfcnpj);
};

module.exports = {
    getCPF
};

const getCPFofCPFCNPJ = (CPFCNPJ_KEY, cpf, callback) => {
    request({
        url:  `${env.CPFCNPJ_API}/${CPFCNPJ_KEY}/7/json/${cpf}`,
        timeout: 1000
    }, async (error, resp) => {
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

const getCNPJofReceitaws = (cnpj, callback) => {
    request(`${env.RECEITAWS_API}/${cnpj}`, async (error, resp) => {
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
            if (receitaws.atividade_principal.length > 0) receitaws.atividade_principal = await receitaws.atividade_principal.map(atividades => {
                return {
                    name: atividades.text,
                    code: atividades.code
                }
            });
            if (receitaws.atividades_secundarias.length > 0) receitaws.atividades_secundarias = await receitaws.atividades_secundarias.map(atividades => {
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

const checkCpfOrCnpj = async (cpfcnpj) => {
    const cpf = await validate.validarCPF(cpfcnpj);
    if (cpf) {
        CPFModel.findOne({ cpf })
            .then(async (_cpf) => {
                if (_cpf) {
                    response.sucess(res, _cpf);
                } else {
                    if (req.params._user) {
                        UserModel.findOne({ _id: req.params._user })
                        .then((user) => {
                            if (!user) {
                                return response.failure(res, CONTROLLER, 8, { error: "Não temos dados desse CPF." });
                            } else {
                                const CPFCNPJ_KEY = user.cpfcnpj_api;
                                getCPFofCPFCNPJ(CPFCNPJ_KEY, cpf, async (error, cpfcnpj) => {
                                    if (error) return response.error(res, CONTROLLER, 5, error);
            
                                    const data = await CPFModel.create(cpfcnpj);
                                    return response.sucess(res, data);
                                });
                            }
                        })
                        .catch(error => response.error(res, CONTROLLER, 3, error));
                    } else return response.failure(res, CONTROLLER, 7, { error: "Não temos dados desse CPF." });
                }
            })
            .catch(error => response.error(res, CONTROLLER, 1, error));
    } else {
        const cnpj = await validate.validarCNPJ(cpfcnpj);
        if (cnpj) {
            CNPJModel.findOne({ cnpj })
                .then(async (_cnpj) => {
                    if (_cnpj) {
                        return response.sucess(res, _cnpj);
                    } else {
                        getCNPJofReceitaws(cnpj, async (error, receitaws) => {
                            if (error) return response.error(res, CONTROLLER, 4, error);

                            const data = await CNPJModel.create(receitaws);
                            return response.sucess(res, data);
                        });
                    }
                })
                .catch(error => response.error(res, CONTROLLER, 2, error));
        } else {
            // ERROR
            response.failure(res, CONTROLLER, 6, { error: "CPF/CNPJ invalido." });
        }
    }
}