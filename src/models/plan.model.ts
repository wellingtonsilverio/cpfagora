import { Schema, Model, model, Types } from "mongoose";
import { IPlanModel } from "../interfaces/plan.interface";

const PlanSchema = new Schema(
	{
        _user: {
            type: Types.ObjectId,
            required: true
        },
        plan: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
	},
	{ collection: 'plans', timestamps: true }
);

export const PlanModel: Model<IPlanModel> = model<IPlanModel>("Plan", PlanSchema);