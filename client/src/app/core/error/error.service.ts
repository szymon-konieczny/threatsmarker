import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ErrorService implements HttpInterceptor {
	public handleError(error: HttpErrorResponse): Observable<never> {
		// TODO: Implement a snackbar to display error messages
		// TODO: Implement displaying different messages according to the error status and/or type
		console.log('Error occured!!!');
		return throwError(error);
	}

	public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(req).pipe(catchError(this.handleError));
	}
}
