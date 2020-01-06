import * as bcrypt from 'bcrypt';

import { env } from '../config/env';

export class Bcrypt {
  public async hashPassword(password: string): Promise<string> {
    try {
      const salt = await bcrypt.genSalt(env.SALT_ROUNDS);
      return await bcrypt.hash(password, salt);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async comparePasswords(password: string, passwordHash: string): Promise<boolean> {
    try {
      return await bcrypt.compare(password, passwordHash);
    } catch (error) {
      throw new Error(error);
    }
  }
}
