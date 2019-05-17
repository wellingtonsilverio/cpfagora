import { Document, Types } from "mongoose";

export interface IPlan {
    _user: Types.ObjectId;
    plan: Number;
    date: Date;
};

export interface IPlanModel extends IPlan, Document { };