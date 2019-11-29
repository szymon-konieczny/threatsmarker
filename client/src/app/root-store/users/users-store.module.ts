import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUsers from '.';

const FEATURE_NAME = 'users';

@NgModule({
	declarations: [],
	imports: [
		StoreModule.forFeature(FEATURE_NAME, fromUsers.UsersReducer),
		EffectsModule.forFeature([fromUsers.UsersEffects]),
	]
})
export class UsersModule { }
