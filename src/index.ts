import * as express from "express";
import { Express } from "express";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
 
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
	require("dotenv").config();

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
	const routes = require('./routes/cpfcnpj.route');

	app.route('/cpfcnpj/:cpfcnpj').get(routes.getCPF);
	app.route('/cpfcnpj/:_user/:cpfcnpj').get(routes.getCPF);
};

start();