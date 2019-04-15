import * as express from "express";
import { Express } from "express";
 
const start = async () => {
	try {
		const app: Express = express();

		require('./config/express').config(app);

		require('./config/routes').routes(app);

		await app.listen(process.env.PORT);

		require('./config/db').connection();

		console.log(`API is now running on port ${process.env.PORT} in ${process.env.ENV} mode`);
	} catch (error) {
		console.log(`[ERROR TRYCATCH] 001 - ${error}`);
		process.exit(1);
	}
};

start();