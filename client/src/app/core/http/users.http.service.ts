import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User, RequestConfig, GetAllResponse } from '../../shared/interfaces';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class UsersHttpService extends HttpService {
	constructor(public http: HttpClient) {
		super();
	}

	public getUsers(requestConfig: RequestConfig): Observable<GetAllResponse<User>> {
		return this.http.get<GetAllResponse<User>>(this.createApiUrl('users', requestConfig), this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public getUser(userId: string): Observable<User> {
		return this.http.get<User>(this.createApiUrl(`users/${userId}`), this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public addUser(userData: User): Observable<User> {
		return this.http.post<User>(this.createApiUrl('users'), userData, this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public updateUser(userData: User): Observable<User> {
		return this.http.put<User>(this.createApiUrl(`users/${userData.id}`), userData, this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public removeUser(userId: string): Observable<User> {
		return this.http.delete<User>(this.createApiUrl(`users/${userId}`), this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}
}
