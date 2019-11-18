import { Router } from 'express';
import { usersController } from './users.controller';

const router = Router();

router.get('/', usersController.getAll);
router.get('/:id', usersController.getUser);
router.post('/:id', usersController.addUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.removeUser);

export default router;
