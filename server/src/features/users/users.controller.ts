import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';

import { UsersService } from './users.service';

@Service()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  public async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data = await this.usersService.getUsers(req.query);
      res.json(data);
    } catch (err) {
      next(err);
    }
  }

  public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await this.usersService.getUser(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await this.usersService.updateUser(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  public async removeUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await this.usersService.removeUser(req.params.id);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
}
