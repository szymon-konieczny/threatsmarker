import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, pluck, mergeMap, tap } from 'rxjs/operators';

import { UsersHttpService } from '@http';
import * as UsersActions from './users.actions';

@Injectable()
export class UsersEffects {
	constructor(
		private actions$: Actions,
		private usersHttpService: UsersHttpService,
	) { }

	public loadUsers$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadUsers),
		pluck('payload'),
		switchMap(({ requestConfig }) => this.usersHttpService.getUsers(requestConfig).pipe(
			map(data => UsersActions.loadUsersSucceeded({ payload: data })),
			catchError(error => of(UsersActions.loadUsersFailed(error))),
		)),
	));

	public loadUser$ = createEffect(() => this.actions$.pipe(
		ofType(UsersActions.loadUser),
		pluck('payload'),
		switchMap(({ userId }) => this.usersHttpService.getUser(userId).pipe(
			map(user => UsersActions.loadUserSucceeded({ payload: { user } })),
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
