import { Express } from 'express';
import * as Sentry from '@sentry/node';
import { env } from '../config/env';

Sentry.init({ dsn: env.SENTRY_DSN });

export class SentryErrorHandler {
  public getSentryErrorHandler(app: Express): void {
    app.use(Sentry.Handlers.requestHandler());
  }
}
