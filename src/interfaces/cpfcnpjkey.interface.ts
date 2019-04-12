import { Document } from "mongoose";

export interface ICPFCNPJKey {
    key: string,
    balance: number,
    accessedAt: Date
};

export interface ICPFCNPJKeyModel extends ICPFCNPJKey, Document { };