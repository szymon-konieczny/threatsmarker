import { Request, Response, NextFunction } from 'express';

import { usersService } from './users.service';
import { authService } from '../auth/auth.service';

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

  public async registerUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userData = req.body;

    try {
      const isDuplicate = await usersService.getUserByEmail(userData.email);

      if (isDuplicate) {
        throw new Error('User already exists');
      }

      const user = await usersService.registerUser(userData);
      res.status(201).json(user);
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
