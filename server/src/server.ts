import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './features';
import { connectDatabase } from './helpers';
import { env } from './config/env';
import { Logger } from './utils';

export class Server {
  private app: Express;
  private logger: Logger;

  constructor() {
    this.logger = new Logger();
  }

  public async init() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());

    this.initializeRouting();
    await connectDatabase();
    await this.initializeServer(env.PORT);
  }

  private async initializeRouting() {
    this.app.use('/api', router);
  }

  private async listen(port: number): Promise<void> {
    return new Promise(resolve => this.app.listen(port, resolve));
  }

  public async initializeServer(port: number) {
    try {
      await this.listen(port);
      this.logger.logInfo({}, `Server is listening at port ${port}`);
    } catch (err) {
      this.logger.logError({}, err);
    }
  }
};
