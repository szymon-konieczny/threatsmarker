import { Request, Response } from 'express';

class UsersController {
  public getAll(req: Request, res: Response): void {
    res.json([1, 2, 3, 4, 5]);
  }
}

export const usersController = new UsersController();
