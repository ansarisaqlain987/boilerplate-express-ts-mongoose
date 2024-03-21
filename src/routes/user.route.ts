import { UserController } from "../controllers";
import { AppRoute } from "../types";

const routes: AppRoute[] = [{
    method: 'GET',
    endpoint: '/',
    middlewares: [],
    controller: UserController.getUsers
}, {
    method: 'POST',
    endpoint: '/login',
    middlewares: [],
    controller: UserController.login
}]

export default {
    routes,
    version: 'v1',
    point: 'user'
}