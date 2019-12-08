import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './features';
import { connectDatabase } from './helpers';
import { env } from './config/env';

export class Server {
  private app: Express;

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
  }

  private initializeRouting() {
    this.app.use('/api', router);
  }

  private async listen(port: number): Promise<void> {
    return new Promise(resolve => this.app.listen(port, resolve));
  }

  public initializeServer(port: number) {
    this.listen(port)
      .then(connection => { console.log('conn: ', connection); })
      .catch((err) => { throw new Error(err); });
  }
};
