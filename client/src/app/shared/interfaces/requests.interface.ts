import { HttpErrorResponse } from '@angular/common/http';

export interface RequestConfig {
	limit?: number;
	page?: number;
	filters?: string[];
	sortDirection?: string;
	orderBy?: string;
}

export interface GetAllResponse<T> extends HttpErrorResponse {
	data: T[];
	count?: number;
}
