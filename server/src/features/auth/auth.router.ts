import { Router } from 'express';
import { Service } from 'typedi';

import { AuthController } from './auth.controller';

@Service()
export class AuthRouter {
  constructor(private readonly authController: AuthController) { }

  public initAuthRouter(): Router {
    const authRouter = Router();

    authRouter.post('/register', this.authController.register.bind(this.authController));
    authRouter.post('/login', this.authController.login.bind(this.authController));

    return authRouter;
  }
}
