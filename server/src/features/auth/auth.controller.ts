import { Request, Response, NextFunction } from 'express';

import { usersService } from '../users/users.service';
import { authService } from './auth.service';
import { Bcrypt } from '../../utils';

class AuthController {
  public bcrypt: Bcrypt;

  constructor() {
    this.bcrypt = new Bcrypt();
  }

  public async register(req: Request, res: Response, next: NextFunction) {
    const userData = req.body;

    const user = await usersService.getUserByEmail(userData.email);

    if (user) {
      return next({ error: 'User already exists!' });
    }

    const hashedPassword = await authService.hashPassword(userData.password);

    const userConfig = {
      ...userData,
      password: hashedPassword,
    }

    const token = await authService.generateAuthToken(userData.id);

    await usersService.registerUser(userConfig);

    // TODO: Check if token needs to be send that way
    res.json({ user, token });
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await usersService.getUserByEmail(email);
      const arePasswordsMatching = await this.bcrypt.comparePasswords(password, user.password);

      if (!user) {
        return next({ error: 'Login failed! Check authentication credentials' });
      }

      if (!arePasswordsMatching) {
        return next({ error: 'Login failed! Wrong password' });
      }

      const token = await authService.generateAuthToken(user.id);

      // TODO: Check if token needs to be send that way
      res.json({ user, token });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
