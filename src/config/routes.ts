import { Express } from "express";
import { getCPFOrCNPJ } from "../routes/search.route";
import { getFreeCPFOrCNPJ } from "../routes/free.route";
import { postBuyPlan } from "../routes/buy.route";

export const routes = (app: Express) => {
	/**
	 * @api {get} / Request Version of project
	 * @apiVersion 1.0.0
	 * @apiName CPFAgoraVersion
	 * @apiGroup CPFAgora
	 *
	 * @apiSuccess {String} version Version of project.
	 */
	app.route('/').get(
		(req: any, res: any) => {
			res.send("0.0.1");
		});
		
	/**
	 * @api {get} /search/:_user/:cpfcnpj Get informations of CPF or CNPJ.
	 * @apiVersion 1.0.0
	 * @apiName SearchCPFAgora
	 * @apiGroup CPFAgora
	 *
	 * @apiParam {String} _user Users unique ID.
	 * @apiParam {Number} cpfcnpj CPF or CNPJ to search.
	 *
	 * @apiSuccess {String} firstname  Firstname of the User.
	 * @apiSuccess {String} lastname   Lastname of the User.
	 * @apiSuccess {Date}   registered Date of Registration.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "firstname": "John",
	 *       "lastname": "Doe"
	 *     }
	 *
	 * @apiError UserNotFound The id of the User was not found.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 */
	app.route('/search/:_user/:cpfcnpj').get(getCPFOrCNPJ);

	/**
	 * @api {get} /free/:email/:cpfcnpj Get informations of CPF or CNPJ (one per day, free use).
	 * @apiVersion 1.0.0
	 * @apiName SearchCPFAgora
	 * @apiGroup CPFAgora
	 *
	 * @apiParam {String} _user Users unique ID.
	 * @apiParam {String} cpfcnpj CPF or CNPJ to search.
	 *
	 * @apiSuccess {String} firstname  Firstname of the User.
	 * @apiSuccess {String} lastname   Lastname of the User.
	 * @apiSuccess {Date}   registered Date of Registration.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "firstname": "John",
	 *       "lastname": "Doe"
	 *     }
	 *
	 * @apiError UserNotFound The id of the User was not found.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 */
	app.route('/free/:email/:cpfcnpj').get(getFreeCPFOrCNPJ);

	/**
	 * @api {post} /buy/plan Create account and buy a plan.
	 * @apiVersion 1.0.0
	 * @apiName BuyPlan
	 * @apiGroup CPFAgora
	 *
	 * @apiSuccess {String} firstname  Firstname of the User.
	 * @apiSuccess {String} lastname   Lastname of the User.
	 * @apiSuccess {Date}   registered Date of Registration.
	 *
	 * @apiSuccessExample Success-Response:
	 *     HTTP/1.1 200 OK
	 *     {
	 *       "firstname": "John",
	 *       "lastname": "Doe"
	 *     }
	 *
	 * @apiError UserNotFound The id of the User was not found.
	 *
	 * @apiErrorExample Error-Response:
	 *     HTTP/1.1 404 Not Found
	 *     {
	 *       "error": "UserNotFound"
	 *     }
	 */
	app.route('/buy/plan').post(postBuyPlan);
};