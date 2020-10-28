import * as jwt from 'jsonwebtoken';
import { Service } from 'typedi';

import { env } from '../config/env';

@Service()
export class Jwt {
  public sign(config: any): string {
    return jwt.sign(config, env.SECRET_KEY);
  }

  public verify(token: string): string | object {
    return jwt.verify(token, env.SECRET_KEY);
  }
}
