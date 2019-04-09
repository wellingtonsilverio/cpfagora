import { Document } from "mongoose";

export interface ICNPJ {
    cnpj: Number,
    atividade_principal?: Array<
        {
            name?: String,
            code?: String
        }
    >,
    atividades_secundarias?: Array<
        {
            name?: String,
            code?: String
        }
    >,
    data_situacao?: Date,
    complemento?: String,
    tipo?: String,
    nome?: String,
    efr?: String,
    situacao?: String,
    bairro?: String,
    logradouro?: String,
    numero?: String,
    cep?: String,
    municipio?: String,
    fantasia?: String,
    porte?: String,
    abertura?: Date,
    natureza_juridica?: String,
    uf?: String,
    telefone?: String,
    ultima_atualizacao?: Date,
    status?: String,
    email?: String,
    motivo_situacao?: String,
    situacao_especial?: String,
    data_situacao_especial?: String,
    capital_social?: Number,
    qsa?: Array<Object>,
    extra?: Object,
    billing?: {
        free?: Boolean,
        database?: Boolean
    }
};

export interface ICNPJModel extends ICNPJ, Document { };