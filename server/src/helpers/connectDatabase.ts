import { connect } from '../database';
import { Logger } from '../utils';

export const connectDatabase = async (): Promise<void> => {
  const logger = new Logger();

  try {
    const databaseConnection = await connect();
    logger.logInfo({}, 'DB connection OK');
    await databaseConnection.runMigrations();
    logger.logInfo({}, 'Migrations OK');
  } catch (err) {
    logger.logError({}, err);
  }
};
