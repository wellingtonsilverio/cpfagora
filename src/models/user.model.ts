import { Schema, Model, model } from "mongoose";
import { IUserModel } from "../interfaces/user.interface";

const UserSchema = new Schema(
	{
        email: {
            type: String,
            required: true
        },
        ipAddress: {
            type: String,
            required: true
        },
        activitiesAt: {
            type: Date,
            required: true
        },
        balance: {
            type: Number,
            required: false,
            default: 0
        }
	},
	{ collection: 'users', timestamps: true }
);

export const UserModel: Model<IUserModel> = model<IUserModel>("User", UserSchema);