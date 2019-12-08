import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersEffects, usersReducer } from './';
import { UsersFacade } from './users.facade';

const FEATURE_NAME = 'users';

@NgModule({
	providers: [UsersFacade],
	imports: [
		StoreModule.forFeature(FEATURE_NAME, usersReducer),
		EffectsModule.forFeature([UsersEffects]),
	]
})
export class UsersModule { }
