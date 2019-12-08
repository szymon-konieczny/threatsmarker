import { connect } from '../database';

export const connectDatabase = async () => {
  try {
    await connect().then(conn => conn.runMigrations());
  } catch (err) {
    throw new Error(err);
  }
}
