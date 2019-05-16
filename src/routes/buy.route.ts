import { UserModel } from "../models/user.model";
import { getIpAndLocationOfClient } from "./free.route";
import moment = require("moment");
// import { getCPFofCPFCNPJ, getCPFCNPJKeyByScore, getCNPJ } from "./search.route";
// import { errorResponse, sucessResponse, failureResponse } from "../modules/responses";
// import { CPFModel } from "../models/cpf.model";
// import { validarCPF, validarCNPJ } from "../modules/functions/validate";

// const requestIp = require('request-ip');
// const iplocation = require("iplocation").default;

// const CONTROLLER: number = 3;

export const postBuyPlan = async (req: any, res: any) => {
    console.log(req.body);

    const ip = await getIpAndLocationOfClient(req);
    
    const user = await UserModel.create({
        email: req.body.form.informations.email,
        ipAddress: ip.clientIp,
        activitiesAt: moment().add(-2, 'days').toDate(),
        balance: 0,
        cpfcnpj: req.body.form.informations.cpfcnpj,
        nome: req.body.form.ninformations.ome,
        senha: req.body.form.informations.senha,
        nacimento: req.body.form.informations.nacimento,
        fantasia: req.body.form.informations.fantasia,
        atividade: req.body.form.informations.atividade,
        describle: req.body.form.describles.describle,
        paymentsDate: req.body.form.payments.date,
    });

    console.log(user);

    await PlanModel.create({
        _user: user._id,
        plan: req.body.form.plan,
        date: req.body.form.payments.date,
    });

    res.send({});
};
