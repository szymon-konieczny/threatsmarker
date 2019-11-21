import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State as UsersState } from './state';
import * as fromUsers from './';
import { User, PaginationConfig, FiltersConfig } from '../../shared/interfaces';

@Injectable()
export class UsersFacade {
	public error$ = this.store.select(fromUsers.UsersSelectors.selectUsersError);
	public isLoading$ = this.store.select(fromUsers.UsersSelectors.selectUsersIsLoading);

	public usersStore$ = this.store.select(fromUsers.UsersSelectors.selectUsersStore);
	public users$ = this.store.select(fromUsers.UsersSelectors.selectAllUsers);

	constructor(private store: Store<UsersState>) { }

	public loadAllUsers() {
		this.store.dispatch(fromUsers.UsersActions.loadAllUsers());
	}

	public loadPaginatedUsers(paginationConfig: PaginationConfig) {
		this.store.dispatch(fromUsers.UsersActions.loadPaginatedUsers({ payload: { paginationConfig } }));
	}

	public loadFilteredUsers(filtersConfig: FiltersConfig) {
		this.store.dispatch(fromUsers.UsersActions.loadFilteredUsers({ payload: { filtersConfig } }));
	}

	public loadSingleUser(userId: string) {
		this.store.dispatch(fromUsers.UsersActions.loadUser({ payload: { userId } }));
	}

	public addUser(user: User) {
		this.store.dispatch(fromUsers.UsersActions.addUser({ payload: { user } }));
	}

	public updateUser(user: User) {
		this.store.dispatch(fromUsers.UsersActions.updateUser({ payload: { user } }));
	}

	public removeUser(userId: string) {
		this.store.dispatch(fromUsers.UsersActions.removeUser({ payload: { userId } }));
	}
}
