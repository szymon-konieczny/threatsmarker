import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './features';
import { connectDatabase } from './helpers';
import { env } from './config/env';
import { Logger } from './utils';
import { infoMessages } from './constants';

export class Server {
  private app: Express;
  public logger: Logger;

  constructor() {
    this.logger = new Logger({});
  }

  public async init() {
    this.app = express();
    this.initializeMiddleware();
    this.initializeRouting();
    await connectDatabase();
    await this.initializeServer(env.PORT);
  }

  private initializeMiddleware() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.logger.attachLoggingMiddleware(this.app);
  }

  private initializeRouting() {
    this.app.use('/api', router);
  }

  private async listen(port: number): Promise<void> {
    return new Promise(resolve => this.app.listen(port, resolve));
  }

  public async initializeServer(port: number): Promise<void> {
    try {
      await this.listen(port);
      this.logger.logInfo(`${infoMessages.serverListeningAtPort} ${port}`);
    } catch (err) {
      this.logger.logError(err);
    }
  }
};
