import { createAction, props } from '@ngrx/store';

import { User, PaginationConfig, FiltersConfig } from '../../shared/interfaces';

export const loadAllUsers = createAction('[Users] Load All Users');
export const loadAllUsersSucceeded = createAction('[Users] Load All Users Succeeded', props<{ payload: { users: User[] } }>());
export const loadAllUsersFailed = createAction('[Users] Load All Users Failed', props<{ payload: Error }>());

export const loadPaginatedUsers = createAction(
	'[Users] Load Paginated Users',
	props<{ payload: { paginationConfig: PaginationConfig } }>(),
);
export const loadPaginatedUsersSucceeded = createAction('[Users] Load Paginated Users Succeeded', props<{ payload: { users: User[] } }>());
export const loadPaginatedUsersFailed = createAction('[Users] Load Paginated Users Failed', props<{ payload: Error }>());

export const loadFilteredUsers = createAction('[Users] Load Filtered User', props<{ payload: { filtersConfig: FiltersConfig } }>());
export const loadFilteredUsersSucceeded = createAction('[Users] Load Filtered User Succeeded', props<{ payload: { users: User[] } }>());
export const loadFilteredUsersFailed = createAction('[Users] Load Filtered User Failed', props<{ payload: Error }>());

export const loadUser = createAction('[Users] Load User', props<{ payload: { userId: string } }>());
export const loadUserSucceeded = createAction('[Users] Load User Succeeded', props<{ payload: { user: User } }>());
export const loadUserFailed = createAction('[Users] Load User Failed', props<{ payload: Error }>());

export const addUser = createAction('[Users] Add User', props<{ payload: { user: User } }>());
export const addUserSucceeded = createAction('[Users] Add User Succeeded', props<{ payload: { user: User } }>());
export const addUserFailed = createAction('[Users] Add User Failed', props<{ payload: Error }>());

export const updateUser = createAction('[Users] Update User', props<{ payload: { user: User } }>());
export const updateUserSucceeded = createAction('[Users] Update User Succeeded', props<{ payload: { user: User } }>());
export const updateUserFailed = createAction('[Users] Update User Failed', props<{ payload: Error }>());

export const removeUser = createAction('[Users] Remove User', props<{ payload: { userId: string } }>());
export const removeUserSucceeded = createAction('[Users] Remove User Succeeded', props<{ payload: { user: User } }>());
export const removeUserFailed = createAction('[Users] Remove User Failed', props<{ payload: Error }>());
