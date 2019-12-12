import { connect } from '../database';
import { Logger } from '../utils';
import { infoMessages } from 'src/constants';

export const connectDatabase = async (): Promise<void> => {
  const logger = new Logger();

  try {
    const databaseConnection = await connect();
    logger.logInfo(infoMessages.DatabaseConnectionOK);
    await databaseConnection.runMigrations();
    logger.logInfo(infoMessages.migrationOK);
  } catch (err) {
    logger.logError(err);
  }
};
