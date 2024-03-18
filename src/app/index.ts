import express from 'express';
import morgan from 'morgan';
import { setRoutes } from '../routes';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// include routes;
setRoutes('api', app)

export const APP = app;
