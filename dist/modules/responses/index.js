"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _sucess = (sucess) => {
    return {
        status: true,
        data: sucess
    };
};
exports.sucessResponse = (res, sucess) => {
    res.status(200).send(_sucess(sucess));
};
const _catch = (controller, code, error) => {
    console.log(`[ERROR] ${controller}.${code}`);
    return {
        status: false,
        controller,
        code,
        data: error
    };
};
exports.failureResponse = (res, controller, code, error) => {
    res.status(200).send(_catch(controller, code, error));
};
exports.errorResponse = (res, controller, code, error) => {
    res.status(400).send(_catch(controller, code, error));
};
//# sourceMappingURL=index.js.map