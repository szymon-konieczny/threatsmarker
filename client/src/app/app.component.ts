import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UsersFacade } from './root-store/users/users.facade';
import { User, RequestConfig } from '@interfaces';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	private readonly userId = '56b964a0-a6a3-47c1-8fd4-b36ba43e4149';
	private readonly mockedUserToAdd: Partial<User> = {
		name: 'Szymon',
		email: 'sz@mo.n',
		googleId: '',
		facebookId: '',
		userInfo: 'Some user info',
		profilePictureUrl: 'asaddsdsd',
		password: '1234asdf',
		role: 'admin',
		status: 'active',
	};

	private readonly mockedUserToUpdate: User = {
		id: this.userId,
		name: 'Mariusz',
		email: 'rob@12.as',
		googleId: '',
		facebookId: '',
		userInfo: 'Updated user info...',
		profilePictureUrl: 'asaddsdsd',
		password: '1234asdf',
		role: 'user',
		status: 'active',
	};

	public users$: Observable<User[]>;
	public destroy$ = new Subject<void>();

	constructor(private usersFacade: UsersFacade) { }

	public ngOnInit() {
		this.usersFacade.loadUsers({});
		this.users$ = this.usersFacade.users$.pipe(takeUntil(this.destroy$));
	}

	public ngOnDestroy() {
		this.destroy$.complete();
		this.destroy$.next();
	}

	public onGetAllUsers() {
		const requestConfig: RequestConfig = {};
		this.usersFacade.loadUsers(requestConfig);
	}

	public onGetUser() {
		this.usersFacade.loadSingleUser(this.userId);
	}

	public onAddUser() {
		this.usersFacade.addUser(this.mockedUserToAdd);
	}

	public onUpdateUser() {
		this.usersFacade.updateUser(this.mockedUserToUpdate);
	}

	public onRemoveUser() {
		this.usersFacade.removeUser(this.userId);
	}
}
