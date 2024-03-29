
import { Controller, Request } from "../types";
import { z } from 'zod';
import { LoginInputSchema } from './../constants/zod.schema'
import { verifyAndThrowError } from "../utils";
import { UserModel } from "../models";

export const getUsers: Controller = (request, response) => {
    const data = UserModel.find({});
    return response.send({status: 200, data, error: null});
}

type LoginInputType = z.infer<typeof LoginInputSchema>
export const login: Controller = (request, response) => {
    const body = request.body;
    const data = verifyAndThrowError<LoginInputType>(LoginInputSchema, body);
    return response.status(200).send({ status: 200, data: { body: data }, error: null });
}