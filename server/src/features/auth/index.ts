import { Router } from 'express';
import { authController } from './auth.controller';

const authRouter = Router();

authRouter.post('/', authController.login);
authRouter.post('/', authController.login);

export { authRouter };
