import {Request as Req, Response as Res, NextFunction as Next} from 'express';

export type Request = Req;
export type Response<T = any> = Res<T>;
export type NextFunction = Next;

export type AppResponse = {
    status: number;
    data: any;
    error: any;
}

export type Middleware = <ResBody = AppResponse>(request: Request, response: Response<ResBody>, next: NextFunction) => void | Response;
export type Controller<ResBody = AppResponse> = (request: Request, response: Response<ResBody>) => void | Response;

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
export type AppRoute = {
    endpoint: string;
    method: Method;
    middlewares: Middleware[];
    controller: Controller;
}
export type ApiVersion = 'v1';
export type RouteExport = {
    routes: AppRoute[];
    version: ApiVersion;
    point: string;
}