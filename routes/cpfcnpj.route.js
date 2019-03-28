const CPFModel = require('../models/cpf.model');
const CNPJModel = require('../models/cnpj.model');
const response = require('../modules/responses');
const request = require('request');
const moment = require('moment');

const CONTROLLER = 1;

const getCPF = async (req, res) => {
    // Verifica se é CPF ou CNPJ

    const cpfcnpj = req.params.cpfcnpj;

    const cpf = await validarCPF(cpfcnpj);
    if (cpf) {
        CPFModel.findOne({ cpf })
            .then(async (_cpf) => {
                if (_cpf) {
                    response.sucess(res, _cpf);
                } else {
                    request(`https://api.cpfcnpj.com.br/52762817d5e97446314cbf2a805980ce/7/json/${cpf}`, async (error, resp) => {
                        if (error) {
                            console.log({ error });
                            res.send({ error });
                        }
                        if (resp && resp.statusCode == 200) {
                            const cpfcnpj = {
                                ...JSON.parse(resp.body),
                                cpf
                            };

                            console.log(cpfcnpj);

                            cpfcnpj.nascimento = moment(cpfcnpj.nascimento, "DD-MM-YYYY", "America/Sao_Paulo").toISOString();

                            cpfcnpj.pacoteUsado = undefined;
                            cpfcnpj.saldo = undefined;
                            cpfcnpj.consultaID = undefined;
                            cpfcnpj.delay = undefined;

                            const data = await CPFModel.create(cpfcnpj);
                            response.sucess(res, data);
                        }
                    });
                    // const data = await CPFModel.create({
                    //     cpf
                    // });
                    // response.sucess(res, data);
                }
            })
            .catch(error => response.error(res, CONTROLLER, 1, error));
    } else {
        const cnpj = await validarCNPJ(cpfcnpj);
        if (cnpj) {
            CNPJModel.findOne({ cnpj })
                .then(async (_cnpj) => {
                    if (_cnpj) {
                        response.sucess(res, _cnpj);
                    } else {
                        request(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, async (error, resp) => {
                            if (error) {
                                console.log({ error });
                                res.send({ error });
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

                                const data = await CNPJModel.create(receitaws);
                                response.sucess(res, data);
                            }
                        });
                    }
                })
                .catch(error => response.error(res, CONTROLLER, 2, error));
        } else {
            // ERROR
            response.failure(res, CONTROLLER, 3, { error: "CPF/CNPJ não encontrado ou invalido." });
        }
    }

    // Verifica se existe no BD tal CNPJ ou CPF

    // caso não
    // Faz a requisição

    // Salva no DB

    // Exibe as informações da DB referente ao CNPJ ou CPF




    // request(`https://www.receitaws.com.br/v1/cnpj/${req.params.cpf}`, function (error, response, body) {
    //     if (error) {
    //         console.log({ error });
    //         res.send({ error });
    //     }
    //     if (response) console.log(response.statusCode);

    //     if (response.statusCode == 200) res.send(body);
    // });
};

module.exports = {
    getCPF
};

const validarCPF = (cpf) => {
    return new Promise((resolve, reject) => {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') return resolve(false);
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return resolve(false);
        // Valida 1o digito	
        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return resolve(false);
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return resolve(false);

        return resolve(cpf);
    });
}

const validarCNPJ = (cnpj) => {
    return new Promise((resolve, reject) => {
        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return resolve(false);

        if (cnpj.length != 14)
            return resolve(false);

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return resolve(false);

        // Valida DVs
        tamanho = cnpj.length - 2
        numeros = cnpj.substring(0, tamanho);
        digitos = cnpj.substring(tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return resolve(false);

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return resolve(false);

        return resolve(cnpj);
    });
}