"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const CPFSchema = new mongoose.Schema({
    cpf: {
        type: Number,
        required: true,
        unique: true
    },
    status: Number,
    nome: String,
    nascimento: Date
}, { collection: 'cpfs', timestamps: true });
exports.default = mongoose.model('CPF', CPFSchema);
//# sourceMappingURL=cpf.model.js.map