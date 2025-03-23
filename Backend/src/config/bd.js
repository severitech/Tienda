import dotenv from 'dotenv';
import mysql2 from 'mysql2/promise';    

dotenv.config()// usando lo que hay en .env (los datos de la BD)

const pool = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_USER,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})

export default pool; // exportando la conexión a la BD para usarla en otros archivos