var express = require('express');
var env = require('./config/env');
var logger = console.log;
var app = express();
 
const routes = require('./routes/cpf.route');
app.route('/:cpfcnpj').get(routes.getCPF);

app.listen(env.PORT, err => {
	if (err) {
		logger(err);
		process.exit(1);
	}

	require('./config/db');

	// fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
	// 	require('./routes/' + file)(app);
	// });

	logger(
		`API is now running on port ${env.PORT} in ${env.ENV} mode`
	);
});