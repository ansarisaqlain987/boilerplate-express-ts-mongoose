import { z } from "zod";
import { CustomError } from "../config";

export const verifyData = (schema: z.SomeZodObject, obj: any) => {
    const valid: any = schema.safeParse(obj);
    return { success: valid.success, error: valid?.error?.errors, data: valid?.data }
}

export const verifyAndThrowError = <T=any>(schema: z.SomeZodObject, obj: any): T => {
    const valid: any = schema.safeParse(obj);
    if(!valid.success){
        throw CustomError(400, valid.error.errors);
    }
    return valid?.data
}