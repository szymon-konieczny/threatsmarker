import { createConnection, ConnectionOptions, Connection } from 'typeorm';

import { UserEntity } from '../features/users/users.entity';
import { env } from '../config/env';

export const connect = async (): Promise<Connection> => {
  const connectionConfig: ConnectionOptions = {
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
  }

  return await createConnection(connectionConfig);
}