import * as express from "express";
import { Express } from "express";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as dotenvExpand from "dotenv-expand";
import { getCPFOrCNPJ } from "./routes/search.route";
 
const start = async () => {
	try {
		const app: Express = express();

		config(app);

		routes(app);

		await app.listen(process.env.PORT);

		require('./config/db');

		console.log(`API is now running on port ${process.env.PORT} in ${process.env.ENV} mode`);
	} catch (error) {
		console.log(`[ERROR TRYCATCH] 001 - ${error}`);
		process.exit(1);
	}
};

const config = (app: Express) => {
	dotenvExpand(require("dotenv").config());

	// Compress the request into GZIP reducing loading time
	app.use(compression());
	// Mount json form parser
	app.use(bodyParser.json({ limit: "50mb" }));
	// Mount query string parser
	app.use(bodyParser.urlencoded({ extended: true }));
	// enable cors in all request
	app.use(cors());
};

const routes = (app: Express) => {
	app.route('/search/:cpfcnpj').get(getCPFOrCNPJ);
	app.route('/search/:_user/:cpfcnpj').get(getCPFOrCNPJ);
};

start();