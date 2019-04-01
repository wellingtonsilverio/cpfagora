const mongoose = require("mongoose");

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

module.exports = mongoose.model('User', UserSchema);