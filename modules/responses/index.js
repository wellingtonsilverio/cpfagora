const sucessReponse = (sucess) => {
    return {
        status: true,
        data: sucess
    }
};
const sucess = (res, sucess) => {
    res.status(200).send(sucessReponse(sucess));
};

const catchReponse = (controller, code, error) => {
    console.log(`[ERROR] ${controller}.${code}`);
    return {
        status: false,
        controller,
        code,
        data: error
    }
};
const failure = (res, controller, code, error) => {
    res.status(200).send(catchReponse(controller, code, error));
};
const error = (res, controller, code, error) => {
    res.status(400).send(catchReponse(controller, code, error));
};

module.exports = {
    sucess,
    failure,
    error
};