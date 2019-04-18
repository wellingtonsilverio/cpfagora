import { Express } from "express";
import { getCPFOrCNPJ } from "../routes/search.route";
import { getFreeCPFOrCNPJ } from "../routes/free.route";

export const routes = (app: Express) => {
	app.route('/').get(
		(req: any, res: any) => {
			res.send("0.0.1");
		});
	// app.route('/search/:cpfcnpj').get(getCPFOrCNPJ);
	app.route('/search/:_user/:cpfcnpj').get(getCPFOrCNPJ);
	app.route('/free/:email/:cpfcnpj').get(getFreeCPFOrCNPJ);
};