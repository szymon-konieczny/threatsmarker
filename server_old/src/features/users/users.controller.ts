import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';

import { UsersService } from './users.service';

@Service()
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  public getAll(req: Request, res: Response, next: NextFunction): void {
    this.usersService.getUsers(req.query)
      .then(data => res.json(data))
      .catch(next);
  }

  public getUser(req: Request, res: Response, next: NextFunction): void {
    this.usersService.getUser(req.params.id)
      .then(user => res.json(user))
      .catch(next);
  }

  public updateUser(req: Request, res: Response, next: NextFunction): void {
    this.usersService.updateUser(req.body)
      .then(user => res.json(user))
      .catch(next);
  }

  public removeUser(req: Request, res: Response, next: NextFunction): void {
    this.usersService.removeUser(req.params.id)
      .then(user => res.json(user))
      .catch(next);
  }
}
