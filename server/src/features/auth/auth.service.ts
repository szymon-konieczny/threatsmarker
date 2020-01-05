import { Container } from 'typedi';

import { Jwt, Bcrypt } from '../../utils';

class AuthService {
  public bcrypt: Bcrypt;
  public jwt: Jwt;

  constructor() {
    this.bcrypt = new Bcrypt();
    this.jwt = new Jwt();
  }

  public generateAuthToken(userId: string): string {
    return this.jwt.sign(userId);
  }

  public async hashPassword(password: string): Promise<string> {
    return await this.bcrypt.hashPassword(password);
  }
}

export const authService = Container.get(AuthService);
