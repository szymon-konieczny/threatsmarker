import pino from 'pino';

export class Logger {
  private logger: pino.Logger;

  constructor() {
    const pinoConfig = {
      prettyPrint: true,
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
}
