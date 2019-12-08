import { SortDirection } from "../constants";

export interface RequestListConfig {
  page?: number;
  limit?: number;
  orderBy?: string;
  sortDirection?: SortDirection;
}

export interface GetAllResponse<T> {
  data: T[];
  count?: number;
}
