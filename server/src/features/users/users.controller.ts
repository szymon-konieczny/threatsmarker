import { Request, Response, NextFunction } from 'express';

import { usersService } from './users.service';

class UsersController {
  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await usersService.getUsers(req.query);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await usersService.getUser(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  public async addUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await usersService.addUser(req.body);
      res.json(user);
      throw new Error('addUser error!!!!');
    } catch (err) {
      next(err);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await usersService.updateUser(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  public async removeUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await usersService.removeUser(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
}

export const usersController = new UsersController();
