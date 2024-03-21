import mongoose from "mongoose";
import { ENV } from "../constants";

export const getConnection = () => {
    mongoose.connect(ENV.DB_URL).then(() => console.log('Database connected'));
    mongoose.connection.on('error', () => console.log('Error while connecting with database'));
    return mongoose.connection;
}