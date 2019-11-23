import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppConfig } from '../../../environments/environment';
import { Threat, RequestConfig, GetAllResponse } from '../../shared/interfaces';

@Injectable({
	providedIn: 'root'
})
export class ThreatsHttpService {
	constructor(public http: HttpClient) { }

	private getApiUrl(path: string) {
		return `${AppConfig.apiUrl}/${path}`;
	}

	public getThreats({ pageSize, pageNumber, filters, sortType }: RequestConfig): Observable<GetAllResponse<Threat>> {
		const filtersList = filters.join(',');
		return this.http.get<GetAllResponse<Threat>>(
			this.getApiUrl(`threats?limit=${pageSize}&page=${pageNumber}&filters=${filtersList}&sort=${sortType}`)
		);
	}

	public getThreat(threatId: string): Observable<Threat> {
		return this.http.get<Threat>(this.getApiUrl(`threats/${threatId}`));
	}

	public addThreat(threatConfig: Threat): Observable<Threat> {
		return this.http.post<Threat>(this.getApiUrl('threats'), threatConfig);
	}

	public updateThreat(threatConfig: Threat): Observable<Threat> {
		return this.http.put<Threat>(this.getApiUrl(`threats/${threatConfig.id}`), threatConfig);
	}

	public removeThreat(threatId: string): Observable<Threat> {
		return this.http.delete<Threat>(this.getApiUrl(`threats/${threatId}`));
	}
}
