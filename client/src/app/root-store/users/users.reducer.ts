import { createReducer, on, Action } from '@ngrx/store';

import { initialState, adapter, State } from './state';
import { UsersActions } from './';

export const usersReducer = createReducer(
	initialState,
	// loadAllUsers
	on(UsersActions.loadAllUsers, state => ({ ...state, isLoading: true, error: null })),
	on(
		UsersActions.loadAllUsersSucceeded,
		(state, { payload }) => ({ ...adapter.addAll(payload.users, state), isLoading: false, error: null }),
	),
	on(UsersActions.loadAllUsersFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// loadPaginatedUsers
	on(UsersActions.loadPaginatedUsers, state => ({ ...state, isLoading: true, error: null })),
	on(
		UsersActions.loadPaginatedUsersSucceeded,
		(state, { payload }) => ({ ...adapter.addAll(payload.users, state), isLoading: false, error: null }),
	),
	on(UsersActions.loadPaginatedUsersFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// loadFilteredUsers
	on(UsersActions.loadFilteredUsers, state => ({ ...state, isLoading: true, error: null })),
	on(
		UsersActions.loadFilteredUsersSucceeded,
		(state, { payload }) => ({ ...adapter.addAll(payload.users, state), isLoading: false, error: null }),
	),
	on(UsersActions.loadFilteredUsersFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// loadUser
	on(UsersActions.loadUser, state => ({ ...state, isLoading: true, error: null })),
	on(UsersActions.loadUserSucceeded, (state, { payload }) => ({ ...state, selectedUser: payload.user, isLoading: false, error: null })),
	on(UsersActions.loadUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// addUser
	on(UsersActions.addUser, state => ({ ...state, isLoading: true, error: null })),
	on(UsersActions.addUserSucceeded, (state, { payload }) => ({ ...adapter.addOne(payload.user, state), isLoading: false, error: null })),
	on(UsersActions.addUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// updateUser
	on(UsersActions.updateUser, state => ({ ...state, isLoading: true, error: null })),
	on(
		UsersActions.updateUserSucceeded,
		(state, { payload }) => ({ ...adapter.updateOne({ id: payload.user.id, changes: payload.user }, state), isLoading: false, error: null }),
	),
	on(UsersActions.updateUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// removeUser
	on(UsersActions.removeUser, state => ({ ...state, isLoading: true, error: null })),
	on(UsersActions.removeUserSucceeded, (state, { payload }) => ({ ...adapter.removeOne(payload.user.id, state), })),
	on(UsersActions.updateUserFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
);

export function reducer(state: State, action: Action) {
	return usersReducer(state, action);
}
