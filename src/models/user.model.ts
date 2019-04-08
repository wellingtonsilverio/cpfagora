import * as mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
        email: {
            type: String,
            required: true
        },
        cpfcnpj_api: {
            type: String,
            required: false
        }
	},
	{ collection: 'users', timestamps: true }
);

export default mongoose.model('User', UserSchema);