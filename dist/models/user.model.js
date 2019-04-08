"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    cpfcnpj_api: {
        type: String,
        required: false
    }
}, { collection: 'users', timestamps: true });
exports.default = mongoose.model('User', UserSchema);
//# sourceMappingURL=user.model.js.map