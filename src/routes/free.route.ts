import { UserModel } from "../models/user.model";
import moment = require("moment");
import { getCPFofCPFCNPJ, getCPFCNPJKeyByScore, getCNPJ } from "./search.route";
import { errorResponse, sucessResponse, failureResponse } from "../modules/responses";
import { CPFModel } from "../models/cpf.model";
import { validarCPF, validarCNPJ } from "../modules/functions/validate";

const requestIp = require('request-ip');
const iplocation = require("iplocation").default;

const CONTROLLER: number = 2;
const MAX_TIMEOUT = 4000;

export const getFreeCPFOrCNPJ = async (req: any, res: any) => {
    const ip = await getIpAndLocationOfClient(req);

    await checkFreeUser(res, req.params.cpfcnpj, req.params.email, ip);
};

const getIpAndLocationOfClient = async (req: any) => {
    const clientIp = await requestIp.getClientIp(req);
    const ipLocation = await iplocation(clientIp, []);

    return { clientIp, ipLocation };
}

const checkFreeUser = async (res: any, cpfcnpj: string, email: string, ip: any) => {
    let user = await UserModel.findOne({ $or: [{ email }, { ipAddress: ip.clientIp }] });

    if (!user) {
        user = await UserModel.create({
            email,
            ipAddress: ip.clientIp,
            activitiesAt: moment().add(-2, 'days').toDate(),
            balance: 0
        });
    }
    const hoursUntilNow = moment().diff(moment(user.activitiesAt), 'hours');
    if (hoursUntilNow >= 24) {
        await checkCpfOrCnpj(res, cpfcnpj, email, ip.clientIp);
    } else {
        failureResponse(res, CONTROLLER, 2, { error: `Você já fez uma pesquisa hoje na conta Free. ` + ((24 - hoursUntilNow > 1) ? `Faltam ${24 - hoursUntilNow} horas` : `falta ${24 - hoursUntilNow} hora`) + " para fazer uma nova pesquisa, volte mais tarde." });
    }
};

const checkCpfOrCnpj = async (res: any, cpfcnpj: string, email: string, ipAddress: string) => {
    let cpf: string;
    let cnpj: string;

    if (cpf = await validarCPF(cpfcnpj)) {
        const _cpf = await getCPF(res, cpf, email, ipAddress);

        await updateActivitiesAt(email, ipAddress);

        sucessResponse(res, _cpf);
    } else if (cnpj = await validarCNPJ(cpfcnpj)) {
        const _cnpj = await getCNPJ(res, cnpj);

        await updateActivitiesAt(email, ipAddress);

        sucessResponse(res, _cnpj);
    } else {
        failureResponse(res, CONTROLLER, 1, { error: "CPF/CNPJ invalido." });
    }
};

const getCPF = async (res: any, cpf: string, email: string, ipAddress: string) => {
    try {
        return await getCPFOfDBOrAPI(res, cpf);
    } catch (error) {
        errorResponse(res, CONTROLLER, 1, error);
    }

    
};

const getCPFOfDBOrAPI = (res: any, cpf: string) => {
    return new Promise(async (resolve: any, reject: any) => {
        const _cpf: any = await CPFModel.findOne({ cpf: cpf });

        if (_cpf) {
            resolve(_cpf);
        } else {
            const CPFCNPJKey = await getCPFCNPJKeyByScore();

            getCPFofCPFCNPJ(res, CPFCNPJKey, cpf, null, async (error: any, cpfcnpj: any) => {
                if (error) return reject(error);

                const _cpf = await CPFModel.create(cpfcnpj);

                resolve(_cpf);
            });
        }
    });
};

const updateActivitiesAt = async (email: string, ipAddress: string) => {
    await UserModel.findOneAndUpdate({ email }, { ipAddress, activitiesAt: moment().toDate() }).exec();
};
