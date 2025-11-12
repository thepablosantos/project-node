import express, { Request, Response } from 'express';
import { userRoutes } from './routes/user.routes';
import { videosRoutes } from './routes/videos.routes';
import { config } from 'dotenv';

config();
const app = express();

console.log(process.env.SECRET);

//middlewares

app.use(express.json());
app.use('/user', userRoutes);
app.use('/videos', videosRoutes);

app.listen(3000, () => console.log('Servidor backend ativo na porta 3000'));
