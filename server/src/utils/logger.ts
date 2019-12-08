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

  public logInfo(object: any, msg: string) {
    this.logger.info(object, msg);
  }

  public logError(object: any, msg: string) {
    this.logger.error(object, msg);
  }

  public logWarn(object: any, msg: string) {
    this.logger.warn(object, msg);
  }

  public attachLoggingMiddleware(app: Express) {
    app.use(expressPino({ logger: this.logger }));
  }
}
