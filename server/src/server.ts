import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './features';
import { connectDatabase } from './helpers';

export class Server {
  private app: Express;

  public init() {
    this.app = express();
    this.app.use(cors());
    this.app.use(bodyParser.json());

    this.initializeRouting();
    this.initializeServer();
  }

  private initializeRouting() {
    this.app.use('/api', router);
  }

  private async listen() {
    return await this.app.listen(process.env.PORT, () => {
      try {
        return connectDatabase();
      } catch (err) {
        throw new Error(err);
      }
    });
  }

  public initializeServer() {
    this.listen()
      .then(connection => { console.log('conn: ', connection); })
      .catch((err) => { throw new Error(err); });
  }
};