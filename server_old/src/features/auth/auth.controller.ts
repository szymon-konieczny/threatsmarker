import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';

import { Bcrypt } from '../../utils';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';

const cookieWithTokenName = 'Token';

@Service()
export class AuthController {
  constructor(
    private readonly bcrypt: Bcrypt,
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) { }

  public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    const userData = req.body;

    try {
      const token = this.authService.generateAuthToken({ id: userData.id });
      const userConfig = await this.authService.getNewUserConfig(userData);
      const user = await this.usersService.createUser(userConfig);

      this.authService.setCookie(res, cookieWithTokenName, token);
      res.status(201).json(user);
    } catch (err) {
      next(err);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await this.usersService.getUserByEmail(email);

      if (!user) {
        return next({ error: 'Login failed! Check authentication credentials' });
      }

      const arePasswordsMatching = await this.bcrypt.comparePasswords(password, user.password);

      if (!arePasswordsMatching) {
        return next({ error: 'Login failed! Wrong password' });
      }

      const token = await this.authService.generateAuthToken({ id: user.id });

      this.authService.setCookie(res, cookieWithTokenName, token);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
