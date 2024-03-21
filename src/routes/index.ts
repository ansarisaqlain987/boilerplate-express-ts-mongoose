import { Express } from 'express';
import { getFileNames } from '../utils';
import { AppRoute, RouteExport } from '../types';

const sanitizeEndpoint = (str: string) => {
    let returnStr = str;
    if(str[0] === '/'){
        returnStr = str.slice(1);
    }
    if(str[str.length - 1] === '/'){
        returnStr = str.slice(0, str.length - 2)
    }
    return returnStr;
}

const setMethods = (prefix: string, app: Express, route: AppRoute, base: string) => {
    const snitizedEndpoint = sanitizeEndpoint(route.endpoint);
    const endpoint = `${prefix}/${base}/${snitizedEndpoint}`
    const params: any[] = [...route.middlewares, route.controller]
    switch(route.method){
        case 'GET': {
            app.get(endpoint, params);
            break;
        }
        case 'POST': {
            app.post(endpoint, params);
            break;
        }
        case 'PUT': {
            app.put(endpoint, params);
            break;
        }
        case 'PATCH': {
            app.patch(endpoint, params);
            break;
        }
        case 'DELETE': {
            app.delete(endpoint, params);
            break;
        }
        default: {
            console.log(`Unable to set the route for the following: ${endpoint}`);
        }
    }
    console.log(`   ${route.method} ${endpoint}`)
}

export const setRoutes = (prefix: string, app: Express) => {
    const names = getFileNames('src/routes');
    const filteredNames = names.filter((fn) => fn.includes('.route.ts'));
    console.log('Routes setup started...!!!')
    filteredNames.map((fname: string) => {
        const data = require('./' + fname);
        const r: RouteExport = data.default
        const base = `${r.version}/${r.point}`;
        r.routes.forEach((route) => {
            setMethods(prefix, app, route, base);
        })
    })
    console.log(`Routes setup complete...!!!`)
}