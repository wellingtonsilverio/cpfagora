const mongoose = require("mongoose");

const CPFSchema = new mongoose.Schema(
	{
		cpf: {
			type: Number,
			required: true
		},
		status: Number,
		nome: String,
		nascimento: Date
	},
	{ collection: 'cpfs', timestamps: true }
);

module.exports = mongoose.model('CPF', CPFSchema);