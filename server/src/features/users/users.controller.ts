import { Request, Response } from 'express';

import { usersService } from './users.service';

class UsersController {
  public async getAll(req: Request, res: Response): Promise<void> {
    const users = await usersService.getUsers(req.query);
    res.json(users);
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    const user = await usersService.getUser(req.params.id);
    res.json(user);
  }

  public async addUser(req: Request, res: Response): Promise<void> {
    const user = await usersService.addUser(req.body);
    res.json(user);
  }

  public updateUser(req: Request, res: Response): void {
    res.json('Update User');
  }

  public removeUser(req: Request, res: Response): void {
    res.json('Remove User');
  }
}

export const usersController = new UsersController();
