import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User, RequestConfig, GetAllResponse } from '@interfaces';
import { ErrorService } from '@core/error';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class UsersHttpService {
	constructor(
		private httpService: HttpService,
		private errorService: ErrorService,
		private http: HttpClient,
	) { }

	public getUsers(requestConfig: RequestConfig): Observable<GetAllResponse<User>> {
		return this.http.get<GetAllResponse<User>>(this.httpService.createApiUrl('users', requestConfig), this.httpService.httpOptions).pipe(
			catchError(error => this.errorService.handleError(error)),
		);
	}

	public getUser(userId: string): Observable<User> {
		return this.http.get<User>(this.httpService.createApiUrl(`users/${userId}`), this.httpService.httpOptions).pipe(
			catchError(error => this.errorService.handleError(error)),
		);
	}

	public addUser(userData: Partial<User>): Observable<User> {
		return this.http.post<User>(this.httpService.createApiUrl('users'), userData, this.httpService.httpOptions).pipe(
			catchError(error => this.errorService.handleError(error)),
		);
	}

	public updateUser(userData: Partial<User>): Observable<User> {
		return this.http.put<User>(this.httpService.createApiUrl(`users/${userData.id}`), userData, this.httpService.httpOptions).pipe(
			catchError(error => this.errorService.handleError(error)),
		);
	}

	public removeUser(userId: string): Observable<User> {
		return this.http.delete<User>(this.httpService.createApiUrl(`users/${userId}`), this.httpService.httpOptions).pipe(
			catchError(error => this.errorService.handleError(error)),
		);
	}
}
