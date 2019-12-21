import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorService } from './error.service';
import { SentryErrorHandlerService } from './sentry-error.service';

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorService,
			multi: true
		},
		{
			provide: ErrorHandler,
			useClass: SentryErrorHandlerService,
		}
	],
})
export class ErrorModule { }
