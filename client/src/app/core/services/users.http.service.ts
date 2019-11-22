import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../../../environments/environment';
import { User, RequestConfig } from '../../shared/interfaces';

@Injectable({
	providedIn: 'root'
})
export class UsersHttpService {
	constructor(public http: HttpClient) { }

	private getApiUrl(path: string) {
		return `${AppConfig.apiUrl}/${path}`;
	}

	public getPaginatedUsers(requestConfig: RequestConfig): Observable<User[]> {
		const { pageSize, pageNumber } = requestConfig.paginationConfig;

		return this.http.get<User[]>(this.getApiUrl(`api/users?limit=${pageSize}&page=${pageNumber}`));
	}

	public getUser(userId: string): Observable<User> {
		return this.http.get<User>(this.getApiUrl(`api/users/${userId}`));
	}

	public addUser(userData: User): Observable<User> {
		return this.http.post<User>(this.getApiUrl(`api/users`), userData);
	}

	public updateUser(userData: User): Observable<User> {
		return this.http.put<User>(this.getApiUrl(`api/users/${userData.id}`), userData);
	}

	public removeUser(userId: string): Observable<User> {
		return this.http.delete<User>(this.getApiUrl(`api/users/${userId}`));
	}
}
