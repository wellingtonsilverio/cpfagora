const mongoose = require("mongoose");

const CNPJSchema = new mongoose.Schema(
	{
		cnpj: {
			type: Number,
			required: true
		},
	},
	{ collection: 'cnpjs', timestamps: true }
);

module.exports = exports = mongoose.model('CNPJ', CNPJSchema);