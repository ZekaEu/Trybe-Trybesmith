import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import Validations from '../middleware/validations.middleware';

const productsRouter = Router();

const productsController = new ProductsController();
const validations = new Validations();

productsRouter.get('/products', productsController.getAll);

productsRouter.post(
  '/products',
  validations.nameCheck,
  validations.amountCheck,
  productsController.create,
);

export default productsRouter;
