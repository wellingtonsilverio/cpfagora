import { Schema, Model, model } from "mongoose";
import { ICPFCNPJKeyModel } from "../interfaces/cpfcnpjkey.interface";

const UserSchema = new Schema(
    {
        key: String,
        balance: Number,
        accessedAt: Date
    },
    { collection: 'cpfcnpjkeys', timestamps: true }
);

export const CPFCNPJKeyModel: Model<ICPFCNPJKeyModel> = model<ICPFCNPJKeyModel>("CPFCNPJKey", UserSchema);