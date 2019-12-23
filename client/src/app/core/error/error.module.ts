import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ErrorHandlerInterceptor } from './error.service';
import { SentryErrorHandlerService } from './sentry-error.service';

@NgModule({
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: ErrorHandlerInterceptor,
			multi: true
		},
		{
			provide: ErrorHandler,
			useClass: SentryErrorHandlerService,
		}
	],
})
export class ErrorModule { }
