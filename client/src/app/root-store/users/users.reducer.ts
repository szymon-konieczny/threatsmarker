import { createReducer, on } from '@ngrx/store';

import { initialState, adapter } from './state';
import * as UsersActions from './users.actions';

export const usersReducer = createReducer(
	initialState,

	on(UsersActions.loadUsers, state => ({ ...state, isLoading: true, error: null })),
	on(
		UsersActions.loadUsersSucceeded,
		(state, { payload }) => ({ ...adapter.addAll(payload.data, state), count: payload.count || null, isLoading: false, error: null }),
	),
	on(UsersActions.loadUsersFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),

	on(UsersActions.loadUser, state => ({ ...state, isLoading: true, error: null })),
	on(UsersActions.loadUserSucceeded, (state, { payload }) => ({ ...state, selectedUser: payload.user, isLoading: false, error: null })),
	on(UsersActions.loadUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),

	on(UsersActions.addUser, state => ({ ...state, isLoading: true, error: null })),
	on(UsersActions.addUserSucceeded, (state, { payload }) => ({ ...adapter.addOne(payload.user, state), isLoading: false, error: null })),
	on(UsersActions.addUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),

	on(UsersActions.updateUser, state => ({ ...state, isLoading: true, error: null })),
	on(
		UsersActions.updateUserSucceeded,
		(state, { payload }) => ({ ...adapter.updateOne({ id: payload.user.id, changes: payload.user }, state), isLoading: false, error: null }),
	),
	on(UsersActions.updateUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),

	on(UsersActions.removeUser, state => ({ ...state, isLoading: true, error: null })),
	on(UsersActions.removeUserSucceeded, (state, { payload }) => ({ ...adapter.removeOne(payload.user.id, state), })),
	on(UsersActions.updateUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
);
