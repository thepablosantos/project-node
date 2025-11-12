import mysql from  'mysql';
import { config } from 'dotenv';
config();

const pool = mysql.createPool({
    "user": process.env.USER_DATABASE,
    "password": process.env.PASSWORD_DATABASE,
    "database": process.env.DATABASE,
    "host": process.env.HOST_DATABASE,
    "port": parseInt(process.env.PORT_DATABASE as string)
})

export { pool };