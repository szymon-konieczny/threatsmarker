export interface RequestConfig {
	pageSize?: number;
	pageNumber?: number;
	filters?: string[];
	sortType?: string;
}

export interface GetAllResponse<T> {
	data: T[];
	count?: number;
}
