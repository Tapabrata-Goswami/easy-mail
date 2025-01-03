import mysql from 'mysql2'
import env from 'dotenv'
env.config()

const dbConn = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
});

export default dbConn;