import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { Service } from 'typedi';
import * as Sentry from '@sentry/node';

import { AppRouter } from './features';
import { connectDatabase } from './helpers';
import { env } from './config/env';
import { Logger } from './utils';
import { infoMessages } from './constants';

@Service()
export class Server {
  private app: Express;

  constructor(
    private readonly appRouter: AppRouter,
    private readonly logger: Logger,
  ) { }

  public async init(): Promise<void> {
    this.app = express();
    this.initializeMiddleware();
    this.initializeRouting();
    await connectDatabase();
    await this.initializeServer(env.PORT);

    if (env.isProduction) {
      this.initializeSentryMiddleware();
    }

    // error handler class

  }

  private initializeMiddleware(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.logger.attachLoggingMiddleware(this.app);
  }

  private initializeRouting(): void {
    this.app.use('/api', this.appRouter.initRouter());
  }

  private async listen(port: number): Promise<void> {
    return new Promise(resolve => this.app.listen(port, resolve));
  }

  private initializeSentryMiddleware() {
    Sentry.init({ dsn: env.SENTRY_DSN });
    this.app.use(Sentry.Handlers.requestHandler());
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
