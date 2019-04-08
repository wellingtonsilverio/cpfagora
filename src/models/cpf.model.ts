import * as mongoose from "mongoose";

const CPFSchema = new mongoose.Schema(
	{
		cpf: {
			type: Number,
			required: true,
			unique: true
		},
		status: Number,
		nome: String,
		nascimento: Date
	},
	{ collection: 'cpfs', timestamps: true }
);

export default mongoose.model('CPF', CPFSchema);