import { Express } from "express";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cors from "cors";
import * as dotenvExpand from "dotenv-expand";

export const config = (app: Express) => {
	// Configure .env with private information
	// dotenvExpand(require("dotenv").config());
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