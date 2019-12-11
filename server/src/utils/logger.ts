import { Express } from 'express';
import pino, { LoggerOptions } from 'pino';
import expressPino from 'express-pino-logger';

export class Logger {
  private logger: pino.Logger;

  constructor(config?: LoggerOptions) {
    const pinoConfig = {
      prettyPrint: true,
      ...config,
    }

    this.logger = pino(pinoConfig);
  }

  public logInfo(message: string, data?: object) {
    this.logger.info(data, message);
  }

  public logError(message: string, data?: object) {
    this.logger.error(data, message);
  }

  public logWarn(message: string, data?: object) {
    this.logger.warn(data, message);
  }

  public attachLoggingMiddleware(app: Express) {
    app.use(expressPino({ logger: this.logger }));
  }
}
