import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import Validations from '../middleware/validations.middleware';

const usersRouter = Router();

const usersController = new UsersController();
const validations = new Validations();

usersRouter.post(
  '/users',
  validations.usernameCheck,
  validations.classeCheck,
  validations.levelCheck,
  validations.passwordCheck,
  usersController.create,
);

export default usersRouter;
