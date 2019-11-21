import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Threat, PaginationConfig, FiltersConfig } from '../../shared/interfaces';

@Injectable({
	providedIn: 'root'
})
export class ThreatsService {
	constructor(public http: HttpClient) { }

	public getAllThreats(): Observable<Threat[]> {
		return this.http.get<Threat[]>('api/threats');
	}

	public getPaginatedThreats(paginationConfig: PaginationConfig): Observable<Threat[]> {
		const { pageSize, pageNumber } = paginationConfig;
		return this.http.get<Threat[]>(`api/threats?limit=${pageSize}&page=${pageNumber}`);
	}

	public getFilteredThreats(filtersConfig: FiltersConfig): Observable<Threat[]> {
		const filters = filtersConfig.filters.join(',');
		return this.http.get<Threat[]>(`api/threats?filters=${filters}`);
	}

	public getThreat(threatId: string): Observable<Threat> {
		return this.http.get<Threat>(`api/threats/${threatId}`);
	}

	public addThreat(threatData: Threat): Observable<Threat> {
		return this.http.post<Threat>(`api/threats`, threatData);
	}

	public updateThreat(threatData: Threat): Observable<Threat> {
		return this.http.put<Threat>(`api/threats/${threatData.id}`, threatData);
	}

	public removeThreat(threatId: string): Observable<Threat> {
		return this.http.delete<Threat>(`api/threats/${threatId}`);
	}
}
