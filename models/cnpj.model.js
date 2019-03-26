const mongoose = require("mongoose");

const CNPJSchema = new mongoose.Schema(
	{
		cnpj: {
			type: Number,
			required: true
		},
	},
	{ collection: 'cnpjs' }
);

module.exports = exports = mongoose.model('CNPJ', CNPJSchema);