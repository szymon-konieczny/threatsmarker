import { createConnection } from 'typeorm';

import { UserEntity } from '../features/users/users.entity';
import { env } from '../config/env';

export const connect = () => createConnection({
  type: 'postgres',
  host: env.API_URL,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: [
    UserEntity,
  ],
  synchronize: true,
  logging: false
});
