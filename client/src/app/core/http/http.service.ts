import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';

import { AppConfig } from '@env/environment';
import { RequestConfig } from '@interfaces';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	public httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			Accept: 'application/json',
		}),
	};

	public handleError(err: any, showNotification = true) {
		if (showNotification) {
			// TODO: Implement error handling + alert service
		}

		return throwError(err);
	}

	public createApiUrl(path: string, requestConfig?: RequestConfig): string {
		const queryParamsString = requestConfig ? this.getQueryParams(requestConfig) : '';
		return `${AppConfig.apiUrl}/${path}${queryParamsString}`;
	}

	private getQueryParams(requestConfig: RequestConfig): string {
		const queryParams = Object.entries(requestConfig).map(([key, value]) =>
			`${key}=${typeof value === 'string' ? value.replace(/\s/, '+') : value}`).join('&');
		return `?${queryParams}`;
	}
}
