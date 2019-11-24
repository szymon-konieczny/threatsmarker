import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from '@interfaces';

export interface State extends EntityState<User> {
	selectedUserId: string;
	count: number;
	isLoading: boolean;
	error: string;
}

export const defaultUsers: State = {
	ids: [],
	entities: {},
	selectedUserId: null,
	count: null,
	isLoading: false,
	error: null,
};

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState(defaultUsers);
