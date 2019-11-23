import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../../../environments/environment';
import { User, RequestConfig, GetAllResponse } from '../../shared/interfaces';

@Injectable({
	providedIn: 'root'
})
export class UsersHttpService {
	constructor(public http: HttpClient) { }

	private getApiUrl(path: string) {
		return `${AppConfig.apiUrl}/${path}`;
	}

	public getUsers({ pageSize, pageNumber, filters, sortType }: RequestConfig): Observable<GetAllResponse<User>> {
		const filtersList = filters.join(',');
		return this.http.get<GetAllResponse<User>>(
			this.getApiUrl(`users?limit=${pageSize}&page=${pageNumber}&filters=${filtersList}&sort=${sortType}`)
		);
	}

	public getUser(userId: string): Observable<User> {
		return this.http.get<User>(this.getApiUrl(this.getApiUrl(`users/${userId}`)));
	}

	public addUser(userData: User): Observable<User> {
		return this.http.post<User>(this.getApiUrl(this.getApiUrl('users')), userData);
	}

	public updateUser(userData: User): Observable<User> {
		return this.http.put<User>(this.getApiUrl(this.getApiUrl(`users/${userData.id}`)), userData);
	}

	public removeUser(userId: string): Observable<User> {
		return this.http.delete<User>(this.getApiUrl(this.getApiUrl(`users/${userId}`)));
	}
}
