import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, pluck, mergeMap } from 'rxjs/operators';

import { UsersService } from '../../core/services';
import { UsersActions } from './';

@Injectable()
export class UsersEffects {
	constructor(
		private actions$: Actions,
		private usersService: UsersService,
	) { }

	public loadAllUsers$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadAllUsers),
		switchMap(() => this.usersService.getAllUsers().pipe(
			map(users => UsersActions.loadAllUsersSucceeded({ payload: { users } })),
			catchError(error => of(UsersActions.loadAllUsersFailed(error))),
		)),
	));

	public loadPaginatedUsers$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadPaginatedUsers),
		pluck('payload'),
		switchMap(({ paginationConfig }) => this.usersService.getPaginatedUsers(paginationConfig).pipe(
			map((users) => UsersActions.loadPaginatedUsersSucceeded({ payload: { users } })),
			catchError(error => of(UsersActions.loadPaginatedUsersFailed(error))),
		)),
	));

	public loadFilteredUsers$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadFilteredUsers),
		pluck('payload'),
		switchMap(({ filtersConfig }) => this.usersService.getFilteredUsers(filtersConfig).pipe(
			map((users) => UsersActions.loadFilteredUsersSucceeded({ payload: { users } })),
			catchError(error => of(UsersActions.loadFilteredUsersFailed(error))),
		)),
	));

	public loadUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadUser),
		pluck('payload'),
		switchMap(({ userId }) => this.usersService.getUser(userId).pipe(
			map((user) => UsersActions.loadUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.loadUserFailed(error))),
		)),
	));

	public addUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.addUser),
		pluck('payload'),
		mergeMap(data => this.usersService.addUser(data.user).pipe(
			map(user => UsersActions.addUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.addUserFailed(error))),
		)),
	));

	public updateUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.updateUser),
		pluck('payload'),
		mergeMap(data => this.usersService.updateUser(data.user).pipe(
			map(user => UsersActions.updateUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.updateUserFailed(error))),
		)),
	));

	public removeUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.removeUser),
		pluck('payload'),
		mergeMap(data => this.usersService.removeUser(data.userId).pipe(
			map(user => UsersActions.removeUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.removeUserFailed(error))),
		)),
	));
}
