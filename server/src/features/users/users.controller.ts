import { Request, Response } from 'express';

import { usersService } from './users.service';

class UsersController {
  public async getAll(req: Request, res: Response): Promise<void> {
    const data = await usersService.getUsers(req.query);
    res.json(data);
  }

  public async getUser(req: Request, res: Response): Promise<void> {
    const user = await usersService.getUser(req.params.id);
    res.json(user);
  }

  public async addUser(req: Request, res: Response): Promise<void> {
    const user = await usersService.addUser(req.body);
    res.json(user);
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    const user = await usersService.updateUser(req.body);
    res.json(user);
  }

  public async removeUser(req: Request, res: Response): Promise<void> {
    const user = await usersService.removeUser(req.params.id);
    res.json(user);
  }
}

export const usersController = new UsersController();
