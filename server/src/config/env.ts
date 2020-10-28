import { str, num, cleanEnv } from 'envalid';

export const env = cleanEnv(process.env, {
  SECRET_KEY: str(),
  SALT_ROUNDS: num(),
  API_URL: str(),
  PORT: num(),
  DB_PORT: num(),
  DB_USER: str(),
  DB_PASS: str(),
  DB_NAME: str(),
  SENTRY_DSN: str(),
});
