import { Router } from 'express';

import { usersController } from './users.controller';

const usersRouter = Router();

usersRouter.get('/', usersController.getAll);
usersRouter.get('/:id', usersController.getUser);
usersRouter.put('/:id', usersController.updateUser);
usersRouter.delete('/:id', usersController.removeUser);

export { usersRouter };
