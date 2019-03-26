var mongoose = require('mongoose');
var env = require('../env');
var logger = console.log;

// import config from '../../config';

// mongoose.Promise = global.Promise;

const connection = mongoose.connect(env.URI, { useNewUrlParser: true });

connection
	.then(db => {
		logger(
			`Successfully connected to MongoDB cluster in ${
				env.ENV
			} mode.`,
		);
		return db;
	})
	.catch(err => {
		if (err.message.code === 'ETIMEDOUT') {
			logger('Attempting to re-establish database connection.');
			mongoose.connect(env.URI, { useNewUrlParser: true });
		} else {
			logger('Error while attempting to connect to database:');
			logger(err);
		}
	});

module.exports = connection;