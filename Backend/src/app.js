import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'

dotenv.config() //usando la dependencia de dont env para cargar las variables de entorno del puerto

const app = express();

app.use(morgan('dev')) // obtener que tipo de endpoint se esta llamando y el tiempo que tarda en responder
app.use(cors()) //para permitir el acceso a la api desde cualquier origen
app.use(express.json()) //para recibir datos en formato json

app.use("/api", userRoutes);

export default app;