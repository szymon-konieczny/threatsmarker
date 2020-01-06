import { Response } from 'express';
import { Container } from 'typedi';

import { Jwt, Bcrypt } from '../../utils';
import { User } from '../../interfaces';
import { getUpdatedConfig } from '../../helpers';
import { usersService } from '../users/users.service';

class AuthService {
  public bcrypt = new Bcrypt();
  public jwt = new Jwt();

  public generateAuthToken(config: Record<string, any>): string {
    return this.jwt.sign(config);
  }

  public async hashPassword(password: string): Promise<string> {
    return await this.bcrypt.hashPassword(password);
  }

  public setCookie(res: Response, name: string, value: string): void {
    const cookieConfig = {
      httpOnly: true, // to disable accessing cookie via client side js
      secure: true, // to force https (if you use it)
      // maxAge: 1000000000, // ttl in ms (remove this option and cookie will die when browser is closed)
      // signed: true // if you use the secret with cookieParser
    };

    res.cookie(name, value, cookieConfig);
  }

  public async getNewUserConfig(userData: User): Promise<User> {
    const isDuplicated = await usersService.getUserByEmail(userData.email);

    if (isDuplicated) {
      throw new Error('User already exists');
    }

    const hashedPassword = await this.hashPassword(userData.password);
    return getUpdatedConfig(userData, { password: hashedPassword });
  }
}

export const authService = Container.get(AuthService);
