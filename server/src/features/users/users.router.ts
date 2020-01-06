import { Router } from 'express';
import { Service } from 'typedi';

import { UsersController } from './users.controller';

@Service()
export class UsersRouter {
  constructor(private readonly usersController: UsersController) { }

  public initUsersRouter(): Router {
    const usersRouter = Router();

    usersRouter.get('/', this.usersController.getAll.bind(this.usersController));
    usersRouter.get('/:id', this.usersController.getUser.bind(this.usersController));
    usersRouter.put('/:id', this.usersController.updateUser.bind(this.usersController));
    usersRouter.delete('/:id', this.usersController.removeUser.bind(this.usersController));

    return usersRouter;
  }
}
