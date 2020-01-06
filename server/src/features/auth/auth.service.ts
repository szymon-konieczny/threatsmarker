import { Response } from 'express';
import { Service } from 'typedi';

import { Jwt, Bcrypt } from '../../utils';
import { User } from '../../interfaces';
import { getUpdatedConfig } from '../../helpers';
import { UsersService } from '../users/users.service';

@Service()
export class AuthService {
  constructor(
    private readonly jwt: Jwt,
    private readonly bcrypt: Bcrypt,
    private readonly usersService: UsersService,
  ) { }

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
      signed: true // if you use the secret with cookieParser
    };

    res.cookie(name, value, cookieConfig);
  }

  public async getNewUserConfig(userData: User): Promise<User> {
    const isDuplicated = await this.usersService.getUserByEmail(userData.email);

    if (isDuplicated) {
      throw new Error('User already exists');
    }

    const hashedPassword = await this.hashPassword(userData.password);
    return getUpdatedConfig(userData, { password: hashedPassword });
  }


  // login()
}
