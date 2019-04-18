const _sucess = (sucess: any) => {
    return {
        status: true,
        data: sucess
    }
};
export const sucessResponse = (res: any, sucess: any) => {
    res.status(200).send(_sucess(sucess));
};

const _catch = (controller: any, code: any, error: any) => {
    return {
        status: false,
        controller,
        code,
        data: error
    }
};
export const failureResponse = (res: any, controller: any, code: any, error: any) => {
    res.status(200).send(_catch(controller, code, error));
};
export const errorResponse = (res: any, controller: any, code: any, error: any) => {
    console.log(`[ERROR] ${controller}.${code}`);
    res.status(400).send(_catch(controller, code, error));
};