import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Threat, RequestConfig, GetAllResponse } from '@interfaces';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class ThreatsHttpService {
	constructor(private httpService: HttpService, private http: HttpClient) { }

	public getThreats(requestConfig: RequestConfig): Observable<GetAllResponse<Threat>> {
		return this.http.get<GetAllResponse<Threat>>(this.httpService.createApiUrl('threats', requestConfig), this.httpService.httpOptions).pipe(
			catchError(error => this.httpService.handleError(error)),
		);
	}

	public getThreat(threatId: string): Observable<Threat> {
		return this.http.get<Threat>(this.httpService.createApiUrl(`threats/${threatId}`), this.httpService.httpOptions).pipe(
			catchError(error => this.httpService.handleError(error)),
		);
	}

	public addThreat(threatConfig: Threat): Observable<Threat> {
		return this.http.post<Threat>(this.httpService.createApiUrl('threats'), threatConfig, this.httpService.httpOptions).pipe(
			catchError(error => this.httpService.handleError(error)),
		);
	}

	public updateThreat(threatConfig: Threat): Observable<Threat> {
		return this.http.put<Threat>(this.httpService.createApiUrl(
			`threats/${threatConfig.id}`), threatConfig, this.httpService.httpOptions
		).pipe(catchError(error => this.httpService.handleError(error)));
	}

	public removeThreat(threatId: string): Observable<Threat> {
		return this.http.delete<Threat>(this.httpService.createApiUrl(`threats/${threatId}`), this.httpService.httpOptions).pipe(
			catchError(error => this.httpService.handleError(error)),
		);
	}
}
