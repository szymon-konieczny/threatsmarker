import * as jwt from 'jsonwebtoken';
import { env } from 'src/config/env';

export class Jwt {
  public sign(userId: string): string {
    return jwt.sign({ userId }, env.SECRET_KEY);
  }

  public verify(token: string) {
    return jwt.verify(token, env.SECRET_KEY);
  }
}
