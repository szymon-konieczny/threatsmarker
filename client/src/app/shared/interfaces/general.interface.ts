export interface RequestConfig {
	paginationConfig?: PaginationConfig;
	filtersConfig?: FiltersConfig;
}

export interface PaginationConfig {
	pageSize: number;
	pageNumber: number;
}

export interface FiltersConfig {
	filters: string[];
}
