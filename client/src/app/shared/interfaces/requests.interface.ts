export interface RequestConfig {
	limit?: number;
	page?: number;
	filters?: string[];
	sort?: string;
}

export interface GetAllResponse<T> {
	data: T[];
	count?: number;
}
