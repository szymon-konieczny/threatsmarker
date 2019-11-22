import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, pluck, mergeMap } from 'rxjs/operators';

import { UsersHttpService } from '../../core/services';
import { UsersActions } from './';

@Injectable()
export class UsersEffects {
	constructor(
		private actions$: Actions,
		private usersHttpService: UsersHttpService,
	) { }

	public loadPaginatedUsers$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadPaginatedUsers),
		pluck('payload'),
		switchMap(({ requestConfig }) => this.usersHttpService.getPaginatedUsers(requestConfig).pipe(
			map((users) => UsersActions.loadPaginatedUsersSucceeded({ payload: { users } })),
			catchError(error => of(UsersActions.loadPaginatedUsersFailed(error))),
		)),
	));

	public loadUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadUser),
		pluck('payload'),
		switchMap(({ userId }) => this.usersHttpService.getUser(userId).pipe(
			map((user) => UsersActions.loadUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.loadUserFailed(error))),
		)),
	));

	public addUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.addUser),
		pluck('payload'),
		mergeMap(data => this.usersHttpService.addUser(data.userConfig).pipe(
			map(user => UsersActions.addUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.addUserFailed(error))),
		)),
	));

	public updateUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.updateUser),
		pluck('payload'),
		mergeMap(data => this.usersHttpService.updateUser(data.userConfig).pipe(
			map(user => UsersActions.updateUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.updateUserFailed(error))),
		)),
	));

	public removeUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.removeUser),
		pluck('payload'),
		mergeMap(data => this.usersHttpService.removeUser(data.userId).pipe(
			map(user => UsersActions.removeUserSucceeded({ payload: { user } })),
			catchError(error => of(UsersActions.removeUserFailed(error))),
		)),
	));
}
