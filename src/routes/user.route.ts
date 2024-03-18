import { UserController } from "../controllers";
import { AppRoute } from "../types";

const routes: AppRoute[] = [{
    method: 'GET',
    endpoint: '/',
    middlewares: [],
    controller: UserController.getUsers
}]

export default {
    routes,
    version: 'v1',
    point: 'user'
}