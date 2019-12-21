import { Request, Response } from 'express';

import { usersService } from './users.service';

class UsersController {
  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const data = await usersService.getUsers(req.query);
      res.json(data);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getUser(req: Request, res: Response, next): Promise<void> {
    try {
      const user = await usersService.getUser(req.params.id);
      res.json(user);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async addUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await usersService.addUser(req.body);
      res.json(user);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await usersService.updateUser(req.body);
      res.json(user);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async removeUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await usersService.removeUser(req.params.id);
      res.json(user);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export const usersController = new UsersController();
