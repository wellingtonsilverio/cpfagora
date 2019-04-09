import { Schema, Model, model } from "mongoose";
import { ICNPJModel } from "../interfaces/cnpj.interface";

const CNPJSchema = new Schema(
	{
		cnpj: {
			type: Number,
			required: true,
			unique: true
		},
		atividade_principal: Array(
			{
				name: String,
				code: String
			}
		),
		atividades_secundarias: Array(
			{
				name: String,
				code: String
			}
		),
		data_situacao: Date,
		complemento: String,
		tipo: String,
		nome: String,
		efr: String,
		situacao: String,
		bairro: String,
		logradouro: String,
		numero: String,
		cep: String,
		municipio: String,
		fantasia: String,
		porte: String,
		abertura: Date,
		natureza_juridica: String,
		uf: String,
		telefone: String,
		ultima_atualizacao: Date,
		status: String,
		email: String,
		motivo_situacao: String,
		situacao_especial: String,
		data_situacao_especial: String,
		capital_social: Number,
		qsa: Array,
		extra: Object,
		billing: {
			free: Boolean,
			database: Boolean
		}
	},
	{ collection: 'cnpjs', timestamps: true }
);

export const CNPJModel: Model<ICNPJModel> = model<ICNPJModel>("CNPJ", CNPJSchema);