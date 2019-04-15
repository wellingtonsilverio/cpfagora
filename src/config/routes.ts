import { Express } from "express";
import { getCPFOrCNPJ } from "../routes/search.route";

export const routes = (app: Express) => {
	app.route('/search/:cpfcnpj').get(getCPFOrCNPJ);
	app.route('/search/:_user/:cpfcnpj').get(getCPFOrCNPJ);
};