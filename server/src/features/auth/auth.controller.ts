import { Request, Response, NextFunction } from 'express';

import { usersService } from '../users/users.service';
import { authService } from './auth.service';
import { Bcrypt } from '../../utils';

const cookieWithTokenName = 'Token';
class AuthController {
  public bcrypt = new Bcrypt();

  public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userData = req.body;

    try {
      const token = await authService.generateAuthToken({ id: userData.id });
      const userConfig = await authService.getNewUserConfig(userData);
      const user = await usersService.createUser(userConfig);

      authService.setCookie(res, cookieWithTokenName, token);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await usersService.getUserByEmail(email);

      if (!user) {
        return next({ error: 'Login failed! Check authentication credentials' });
      }

      const arePasswordsMatching = await this.bcrypt.comparePasswords(password, user.password);

      if (!arePasswordsMatching) {
        return next({ error: 'Login failed! Wrong password' });
      }

      const token = await authService.generateAuthToken({ id: user.id });

      authService.setCookie(res, cookieWithTokenName, token);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
