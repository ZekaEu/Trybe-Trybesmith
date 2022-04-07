import express from 'express';
import productsRouter from './routes/products.routes';
import usersRouter from './routes/users.routes';

const app = express();

app.use(express.json());

app.use(productsRouter);

app.use(usersRouter);

export default app;
