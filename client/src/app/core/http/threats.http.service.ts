import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Threat, RequestConfig, GetAllResponse } from '../../shared/interfaces';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class ThreatsHttpService extends HttpService {
	constructor(public http: HttpClient) {
		super();
	}

	public getThreats(requestConfig: RequestConfig): Observable<GetAllResponse<Threat>> {
		return this.http.get<GetAllResponse<Threat>>(this.createApiUrl('threats', requestConfig), this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public getThreat(threatId: string): Observable<Threat> {
		return this.http.get<Threat>(this.createApiUrl(`threats/${threatId}`), this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public addThreat(threatConfig: Threat): Observable<Threat> {
		return this.http.post<Threat>(this.createApiUrl('threats'), threatConfig, this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public updateThreat(threatConfig: Threat): Observable<Threat> {
		return this.http.put<Threat>(this.createApiUrl(`threats/${threatConfig.id}`), threatConfig, this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}

	public removeThreat(threatId: string): Observable<Threat> {
		return this.http.delete<Threat>(this.createApiUrl(`threats/${threatId}`), this.httpOptions).pipe(
			catchError(error => this.handleError(error)),
		);
	}
}
