import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { UsersFacade } from './root-store/users/users.facade';
import { User, RequestConfig } from '@interfaces';
import { AlertService } from '@core/alert/alert.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

	private readonly userId = '462da105-b32d-409f-a906-bea0e37c5ba6';
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

	public columnsToDisplay = ['name', 'email', 'status'];
	public dataSource: MatTableDataSource<User>;

	constructor(
		private usersFacade: UsersFacade,
		private alertService: AlertService,
	) { }

	public openSnackBar(message: string, action: string) {
		this.alertService.openSnackBar(message, action);
	}

	public ngOnInit() {
		this.usersFacade.loadUsers({});
		this.usersFacade.users$.pipe(
			takeUntil(this.destroy$),
		).subscribe(users => {
			this.dataSource = new MatTableDataSource<User>(users);
			this.dataSource.paginator = this.paginator;
		});
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

	public onShowInfoAlert() {
		this.openSnackBar('Some info alert', 'info');
	}

	public onShowErrorAlert() {
		this.openSnackBar('Some error alert', 'error');
	}
}
