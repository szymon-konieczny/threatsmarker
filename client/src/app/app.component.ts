import { Component } from '@angular/core';
import { UsersFacade } from './root-store/users/users.facade';
import { User } from './shared/interfaces';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	private readonly mockedUser: User = {
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

	constructor(private readonly usersFacade: UsersFacade) { }

	public onGetUser() {
		this.usersFacade.loadSingleUser('1');
	}

	public onAddUser() {
		this.usersFacade.addUser(this.mockedUser);
	}

	public onUpdateUser() { }

	public onRemoveUser() { }
}
