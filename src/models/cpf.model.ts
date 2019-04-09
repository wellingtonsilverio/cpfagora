import { Schema, Model, model } from "mongoose";
import { ICPFModel } from "../interfaces/cpf.interface";

const CPFSchema = new Schema(
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

export const CPFModel: Model<ICPFModel> = model<ICPFModel>("CPF", CPFSchema);