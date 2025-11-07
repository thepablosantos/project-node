import express, { Request, Response } from 'express';
import { userRoutes } from './routes/user.routes';
const app = express();

app.use(express.json());
app.use('/user', userRoutes);

app.listen(3000, () => console.log('Servidor backend ativo na porta 3000'));
