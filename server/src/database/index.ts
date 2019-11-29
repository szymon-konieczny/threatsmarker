import { createConnection } from 'typeorm';
import { User } from '../features/users/users.entity';

export const connect = () => createConnection({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [
    User,
  ],
  synchronize: true,
  logging: false
});
