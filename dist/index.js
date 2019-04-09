"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const cors = require("cors");
const dotenvExpand = require("dotenv-expand");
const cpfcnpj_route_1 = require("./routes/cpfcnpj.route");
const start = async () => {
    try {
        const app = express();
        config(app);
        routes(app);
        await app.listen(process.env.PORT);
        require('./config/db');
        console.log(`API is now running on port ${process.env.PORT} in ${process.env.ENV} mode`);
    }
    catch (error) {
        console.log(`[ERROR TRYCATCH] 001 - ${error}`);
        process.exit(1);
    }
};
const config = (app) => {
    dotenvExpand(require("dotenv").config());
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
    app.route('/cpfcnpj/:cpfcnpj').get(cpfcnpj_route_1.getCPF);
    app.route('/cpfcnpj/:_user/:cpfcnpj').get(cpfcnpj_route_1.getCPF);
};
start();
//# sourceMappingURL=index.js.map