import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { User } from '@interfaces';

export interface State extends EntityState<User> {
	selectedUser: User;
	count: number;
	isLoading: boolean;
	error: string;
}

export const defaultUsers: State = {
	ids: [],
	entities: {},
	selectedUser: null,
	count: null,
	isLoading: false,
	error: null,
};

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: State = adapter.getInitialState(defaultUsers);
