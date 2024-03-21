import { AppResponse, NextFunction, Request, Response } from "../types";

export const CustomError = (status: number, error: any) => {
    return new Error(JSON.stringify({status, error}));
}

export const errorMiddleware = (err: any, request: Request, response: Response<AppResponse>, next: NextFunction) => {
    try{
        console.log(err)
        if(err && err.message && JSON.parse(err.message)){
            const customError = JSON.parse(err.message);
            return response.status(customError?.status ?? 500).send({status: customError?.status ?? 500, data: null, error: customError?.error})
        }
        return response.status(500).send({status: 500, data: null, error: err})
    } catch(error){
        return response.status(500).send({status: 500, data: null, error: error})
    }
}