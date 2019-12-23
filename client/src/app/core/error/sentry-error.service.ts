import { Injectable, ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/browser';

import * as env from '@env/environment';

Sentry.init({
	dsn: env.AppConfig.sentryDsn,
});

@Injectable({
	providedIn: 'root'
})
export class SentryErrorHandlerService implements ErrorHandler {
	public handleError(error: any) {
		const eventId = Sentry.captureException(error.originalError || error);
		Sentry.showReportDialog({ eventId });
	}
}
