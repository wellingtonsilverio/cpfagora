const express = require('express');
const env = require('./config/env');
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const logger = console.log;
const app = express();

// Compress the request into GZIP reducing loading time
app.use(compression());
// Mount json form parser
app.use(bodyParser.json({ limit: "50mb" }));
// Mount query string parser
app.use(bodyParser.urlencoded({ extended: true }));
// enable cors in all request
app.use(cors());
 
const routes = require('./routes/cpfcnpj.route');
app.route('/cpfcnpj/:cpfcnpj').get(routes.getCPF);
app.route('/cpfcnpj/:_user/:cpfcnpj').get(routes.getCPF);

app.listen(env.PORT, err => {
	if (err) {
		logger(err);
		process.exit(1);
	}

	require('./config/db');

	logger(
		`API is now running on port ${env.PORT} in ${env.ENV} mode`
	);
});