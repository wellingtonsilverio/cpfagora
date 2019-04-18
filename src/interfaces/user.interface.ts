import { Document } from "mongoose";

export interface IUser {
    email: String,
    ipAddress: String
    activitiesAt: Date
    balance: Number
};

export interface IUserModel extends IUser, Document { };