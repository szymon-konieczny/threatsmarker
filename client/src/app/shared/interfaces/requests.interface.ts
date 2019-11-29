export interface RequestConfig {
	limit?: number;
	page?: number;
	filters?: string[];
	sortDirection?: string;
	orderBy?: string;
}

export interface GetAllResponse<T> {
	data: T[];
	count?: number;
}
