const CPFModel = require('../models/cpf.model');
const CNPJModel = require('../models/cnpj.model');

const getCPF = (req, res) => {
    // Verifica se é CPF ou CNPJ

    const cpfcnpj = req.params.cpfcnpj;

    const cpf = validarCPF(cpfcnpj);
    if (cpf) {
        CPFModel.findOne({ cpf })
            .then((_cpf) => {
                if(_cpf) {
                    res.send(_cpf);
                } else {
                    _cpf = new CPFModel({
                        cpf: cpf
                    });
                    _cpf.save(error => {
                        if (error) {
                            console.log("error save cpf: ", error);
                            res.send(error);
                        } else {
                            res.send(error || _cpf);
                        }
                    });
                }
            })
            .catch((error) => {
                console.log("error cpf: ", error);
                res.send(error);
            });
    } else {
        const cnpj = validarCNPJ(cpfcnpj);
        if (cnpj) {
            CNPJModel.findOne({ cnpj })
            .then((_cnpj) => {
                if(_cnpj) {
                    res.send(_cnpj);
                } else {
                    _cnpj = new CPFModel({
                        cnpj: cnpj
                    });
                    _cnpj.save(error => {
                        if (error) {
                            console.log("error save cnpj: ", error);
                            res.send(error);
                        } else {
                            res.send(error || _cnpj);
                        }
                    });
                }
            })
            .catch((error) => {
                console.log("error cnpj: ", error);
                res.send(error);
            });
        } else {
            // ERROR
            console.log("else");
            res.send("else");
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

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;
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
        return false;
    // Valida 1o digito	
    add = 0;
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;
    // Valida 2o digito	
    add = 0;
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;

    return cpf;
}

function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

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
        return false;

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
        return false;

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
        return false;

    return cnpj;
}