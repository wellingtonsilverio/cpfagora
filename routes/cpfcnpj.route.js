const CPFModel = require('../models/cpf.model');
const CNPJModel = require('../models/cnpj.model');
const response = require('../modules/responses');
const validate = require('../modules/functions/validate'); 
const env = require('../config/env');
const request = require('request');
const moment = require('moment');

const CONTROLLER = 1;

const getCPF = async (req, res) => {
    // Verifica se é CPF ou CNPJ
    const cpfcnpj = req.params.cpfcnpj;

    const cpf = await validate.validarCPF(cpfcnpj);
    if (cpf) {
        CPFModel.findOne({ cpf })
            .then(async (_cpf) => {
                if (_cpf) {
                    response.sucess(res, _cpf);
                } else {
                    getCPFofCPFCNPJ(cpf, async (error, cpfcnpj) => {
                        if (error) return res.send({ error });

                        const data = await CPFModel.create(cpfcnpj);
                        return response.sucess(res, data);
                    });
                }
            })
            .catch(error => response.error(res, CONTROLLER, 1, error));
    } else {
        const cnpj = await validate.validarCNPJ(cpfcnpj);
        if (cnpj) {
            CNPJModel.findOne({ cnpj })
                .then(async (_cnpj) => {
                    if (_cnpj) {
                        response.sucess(res, _cnpj);
                    } else {
                        getCNPJofReceitaws(cnpj, async (error, receitaws) => {
                            if (error) return res.send({ error });

                            const data = await CNPJModel.create(receitaws);
                            response.sucess(res, data);
                        });
                    }
                })
                .catch(error => response.error(res, CONTROLLER, 2, error));
        } else {
            // ERROR
            response.failure(res, CONTROLLER, 3, { error: "CPF/CNPJ invalido." });
        }
    }
};

module.exports = {
    getCPF
};


/**
 * Get CPF in CPFCNPJ API and format this
 * 
 * @param  {{any, any}} callback - return {error, cpfcnpj}
 */
const getCPFofCPFCNPJ = (cpf, callback) => {
    request(`${env.CPFCNPJ_API}/${env.CPFCNPJ_KEY}/7/json/${cpf}`, async (error, resp) => {
        if (error) {
            console.log({ error });
            callback(error, null);
        }
        if (resp && resp.statusCode == 200) {
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

/**
 * Get CNPJ in Receitaws API and format this
 * 
 * @param  {{any, any}} callback - return {error, receitaws}
 */
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