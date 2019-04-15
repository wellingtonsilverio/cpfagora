import * as mongoose from "mongoose";

const MONGO_URI: string = String(process.env.MONGO_URI);

const connection = () => {
	mongoose.set('useCreateIndex', true);
	mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then((db: any) => {
		console.log(
			`Successfully connected to MongoDB cluster in ${process.env.ENV} mode.`,
		);
		return db;
	})
	.catch((err: any) => {
		if (err.message.code === 'ETIMEDOUT') {
			console.log('Attempting to re-establish database connection.');
			connection();
		} else {
			console.log('Error while attempting to connect to database:');
			console.log(err);
		}
	});
};

connection();
	