import { Document } from "mongoose";

export interface IUser {
    email: String,
    cpfcnpj_api?: String
};

export interface IUserModel extends IUser, Document { };