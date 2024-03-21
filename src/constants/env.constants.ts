import { serializePort } from "../utils";

export const ENV = {
    PORT: serializePort(process.env.PORT, 8000),
    DB_URL: process.env.DB_URL || 'mongodb://localhost:27017/test_db'
}