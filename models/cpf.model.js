const mongoose = require("mongoose");

const CPFSchema = new mongoose.Schema(
	{
		cpf: {
			type: Number,
			required: true
		},
	},
	{ collection: 'cpfs' }
);

module.exports = exports = mongoose.model('CPF', CPFSchema);