"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const start = () => __awaiter(this, void 0, void 0, function* () {
    try {
        const app = express();
        config(app);
        routes(app);
        yield app.listen(process.env.PORT);
        require('./config/db');
        console.log(`API is now running on port ${process.env.PORT} in ${process.env.ENV} mode`);
    }
    catch (error) {
        console.log(`[ERROR TRYCATCH] 001 - ${error}`);
        process.exit(1);
    }
});
const config = (app) => {
    require("dotenv").config();
    // Compress the request into GZIP reducing loading time
    app.use(compression());
    // Mount json form parser
    app.use(bodyParser.json({ limit: "50mb" }));
    // Mount query string parser
    app.use(bodyParser.urlencoded({ extended: true }));
    // enable cors in all request
    app.use(cors());
};
const routes = (app) => {
    const routes = require('./routes/cpfcnpj.route');
    app.route('/cpfcnpj/:cpfcnpj').get(routes.getCPF);
    app.route('/cpfcnpj/:_user/:cpfcnpj').get(routes.getCPF);
};
start();
//# sourceMappingURL=index.js.map