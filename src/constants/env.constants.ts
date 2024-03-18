import { parse } from "../utils";

export const ENV = {
    PORT: parse.serializePort(process.env.PORT, 8000),
    DB_URL: process.env.DB_URL || 'mongo+srv://localhost:5432/test_db'
}