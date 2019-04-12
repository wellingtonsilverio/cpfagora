import { Document } from "mongoose";

export interface IUser {
    email: String,
    balance: Number
};

export interface IUserModel extends IUser, Document { };