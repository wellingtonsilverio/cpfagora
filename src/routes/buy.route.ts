import { UserModel } from "../models/user.model";
import { PlanModel } from "../models/plan.model";
import { getIpAndLocationOfClient } from "./free.route";
import moment = require("moment");
import { errorResponse, sucessResponse, failureResponse } from "../modules/responses";

const CONTROLLER: number = 3;

export const postBuyPlan = async (req: any, res: any) => {
    console.log(req.body);

    try {
        const ip = await getIpAndLocationOfClient(req);

        const email = req.body.form.informations.email;

        let user = await UserModel.findOneAndUpdate({ $or: [{ email }, { ipAddress: ip.clientIp }] }, {
            cpfcnpj: req.body.form.informations.cpfcnpj,
            password: req.body.form.informations.senha,
            describle: req.body.form.describles.describle
        });
    
        if (!user) {
            user = await UserModel.create({
                email,
                ipAddress: ip.clientIp,
                activitiesAt: moment().add(-2, 'days').toDate(),
                balance: 0,
                cpfcnpj: req.body.form.informations.cpfcnpj,
                password: req.body.form.informations.senha,
                describle: req.body.form.describles.describle
            });
        }

        console.log(user);

        const plan = await PlanModel.create({
            _user: user._id,
            plan: req.body.plan,
            date: req.body.form.payments.date,
        });

        console.log(plan);

        sucessResponse(res, { message: "Buy Plan success." });
    } catch (error) {
        errorResponse(res, CONTROLLER, 1, error);      
    }
};
