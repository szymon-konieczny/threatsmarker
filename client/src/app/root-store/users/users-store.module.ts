import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromUsers from '.';

@NgModule({
	declarations: [],
	imports: [
		StoreModule.forFeature('users', fromUsers.UsersReducer),
		EffectsModule.forFeature([fromUsers.UsersEffects]),
	]
})
export class UsersModule { }
