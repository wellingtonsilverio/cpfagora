import { Document } from "mongoose";

export interface ICPF {
    cpf: Number,
    status?: Number,
    nome?: String,
    nascimento?: Date
};

export interface ICPFModel extends ICPF, Document { };