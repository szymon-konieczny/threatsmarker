export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface RequestListConfig {
  page?: number;
  limit?: number;
  orderBy?: string;
  sortDirection?: SortDirection;
}
