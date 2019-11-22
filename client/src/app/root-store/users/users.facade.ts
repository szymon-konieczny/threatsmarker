import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State as UsersState } from './state';
import * as fromUsers from './';
import { User, RequestConfig } from '../../shared/interfaces';

@Injectable()
export class UsersFacade {
	public error$ = this.store.select(fromUsers.UsersSelectors.selectUsersError);
	public isLoading$ = this.store.select(fromUsers.UsersSelectors.selectUsersIsLoading);

	public usersStore$ = this.store.select(fromUsers.UsersSelectors.selectUsersStore);
	public users$ = this.store.select(fromUsers.UsersSelectors.selectAllUsers);

	constructor(private store: Store<UsersState>) { }

	public loadPaginatedUsers(requestConfig: RequestConfig) {
		this.store.dispatch(fromUsers.UsersActions.loadPaginatedUsers({ payload: { requestConfig } }));
	}

	public loadSingleUser(userId: string) {
		this.store.dispatch(fromUsers.UsersActions.loadUser({ payload: { userId } }));
	}

	public addUser(userConfig: User) {
		this.store.dispatch(fromUsers.UsersActions.addUser({ payload: { userConfig } }));
	}

	public updateUser(userConfig: User) {
		this.store.dispatch(fromUsers.UsersActions.updateUser({ payload: { userConfig } }));
	}

	public removeUser(userId: string) {
		this.store.dispatch(fromUsers.UsersActions.removeUser({ payload: { userId } }));
	}
}
