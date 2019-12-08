import { createAction, props } from '@ngrx/store';

import { User, RequestConfig, GetAllResponse } from '@interfaces';

export enum ActionTypes {
	LOAD_USERS = '[Users] Load Users',
	LOAD_USERS_SUCCEEDED = '[Users] Load Users Succeeded',
	LOAD_USERS_FAILED = '[Users] Load Users Failed',

	LOAD_USER = '[Users] Load User',
	LOAD_USER_SUCCEEDED = '[Users] Load User Succeeded',
	LOAD_USER_FAILED = '[Users] Load User Failed',

	ADD_USER = '[Users] Add User',
	ADD_USER_SUCCEEDED = '[Users] Add User Succeeded',
	ADD_USER_FAILED = '[Users] Add User Failed',

	UPDATE_USER = '[Users] Update User',
	UPDATE_USER_SUCCEEDED = '[Users] Update User Succeeded',
	UPDATE_USER_FAILED = '[Users] Update User Failed',

	REMOVE_USER = '[Users] Remove User',
	REMOVE_USER_SUCCEEDED = '[Users] Remove User Succeeded',
	REMOVE_USER_FAILED = '[Users] Remove User Failed',
}

export const loadUsers = createAction(
	ActionTypes.LOAD_USERS,
	props<{ payload: { requestConfig: RequestConfig } }>(),
);
export const loadUsersSucceeded = createAction(
	ActionTypes.LOAD_USERS_SUCCEEDED,
	props<{ payload: GetAllResponse<User> }>(),
);
export const loadUsersFailed = createAction(ActionTypes.LOAD_USERS_FAILED, props<{ payload: Error }>());

export const loadUser = createAction(ActionTypes.LOAD_USER, props<{ payload: { userId: string } }>());
export const loadUserSucceeded = createAction(ActionTypes.LOAD_USER_SUCCEEDED, props<{ payload: { user: User } }>());
export const loadUserFailed = createAction(ActionTypes.LOAD_USER_FAILED, props<{ payload: Error }>());

export const addUser = createAction(ActionTypes.ADD_USER, props<{ payload: { userConfig: Partial<User> } }>());
export const addUserSucceeded = createAction(ActionTypes.ADD_USER_SUCCEEDED, props<{ payload: { user: User } }>());
export const addUserFailed = createAction(ActionTypes.ADD_USER_FAILED, props<{ payload: Error }>());

export const updateUser = createAction(ActionTypes.UPDATE_USER, props<{ payload: { userConfig: Partial<User> } }>());
export const updateUserSucceeded = createAction(ActionTypes.UPDATE_USER_SUCCEEDED, props<{ payload: { user: User } }>());
export const updateUserFailed = createAction(ActionTypes.UPDATE_USER_FAILED, props<{ payload: Error }>());

export const removeUser = createAction(ActionTypes.REMOVE_USER, props<{ payload: { userId: string } }>());
export const removeUserSucceeded = createAction(ActionTypes.REMOVE_USER_SUCCEEDED, props<{ payload: { user: User } }>());
export const removeUserFailed = createAction(ActionTypes.REMOVE_USER_FAILED, props<{ payload: Error }>());
