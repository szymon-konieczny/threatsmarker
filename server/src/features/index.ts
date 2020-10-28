import { Router } from 'express';
import { UsersRouter } from './users/users.router';
import { AuthRouter } from './auth/auth.router';
import { Service } from 'typedi';

@Service()
export class AppRouter {
  constructor(
    private readonly usersRouter: UsersRouter,
    private readonly authRouter: AuthRouter,
  ) { }

  public initRouter() {
    const router = Router();

    router.use('/users', this.usersRouter.initUsersRouter());
    router.use('/auth', this.authRouter.initAuthRouter());

    return router;
  }
}
