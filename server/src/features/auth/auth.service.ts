import { Container } from 'typedi';

import { Jwt } from '../../utils';

class AuthService {
  constructor(private jwt: Jwt) { }

  public generateAuthToken(userId: string): string {
    return this.jwt.sign(userId);
  }
}

export const authService = Container.get(AuthService);
