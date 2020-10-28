import { Express } from 'express';
import pino from 'pino';
import expressPino from 'express-pino-logger';

export class Logger {
  private logger: pino.Logger = pino({
    prettyPrint: true,
  });

  public logInfo(message: string, data = {}) {
    this.logger.info(data, message);
  }

  public logError(message: string, data = {}) {
    this.logger.error(data, message);
  }

  public logWarn(message: string, data = {}) {
    this.logger.warn(data, message);
  }

  public attachLoggingMiddleware(app: Express) {
    app.use(expressPino({ logger: this.logger }));
  }
}
