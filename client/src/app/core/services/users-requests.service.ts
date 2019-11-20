import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User, PaginationConfig } from '../../shared/interfaces';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	constructor(public http: HttpClient) { }

	public getAllUsers(): Observable<User[]> {
		return this.http.get<User[]>('api/users');
	}

	public getPaginatedUsers(paginationConfig: PaginationConfig): Observable<User[]> {
		const { pageSize, pageNumber } = paginationConfig;
		return this.http.get<User[]>(`api/users?limit=${pageSize}&page=${pageNumber}`);
	}

	public getUser(userId: string): Observable<User> {
		return this.http.get<User>(`api/users/${userId}`);
	}

	public addUser(userData: User): Observable<User> {
		return this.http.post<User>(`api/users`, userData);
	}

	public updateUser(userData: User): Observable<User> {
		return this.http.put<User>(`api/users/${userData.id}`, userData);
	}

	public removeUser(userId: string): Observable<User> {
		return this.http.delete<User>(`api/users/${userId}`);
	}
}