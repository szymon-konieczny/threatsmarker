import { Request, Response } from 'express';

class UsersController {
  public getAll(req: Request, res: Response): void {
    res.json([1, 2, 3, 4, 5]);
  }

  public getUser(req: Request, res: Response): void {
    res.json('Get User');
  }

  public addUser(req: Request, res: Response): void {
    res.json('Add User');
  }

  public updateUser(req: Request, res: Response): void {
    res.json('Update User');
  }

  public removeUser(req: Request, res: Response): void {
    res.json('Remove User');
  }
}

export const usersController = new UsersController();
