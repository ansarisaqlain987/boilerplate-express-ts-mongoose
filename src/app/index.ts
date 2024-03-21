import express from 'express';
import morgan from 'morgan';
import { setRoutes } from '../routes';
import { errorMiddleware, getConnection } from '../config';

const app = express();

getConnection();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// include routes;
setRoutes('/api', app);

app.use(errorMiddleware)

export const APP = app;
