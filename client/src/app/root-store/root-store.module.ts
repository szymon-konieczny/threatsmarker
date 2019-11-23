import { NgModule } from '@angular/core';

import { UsersModule } from './users/users-store.module';
import { ThreatsModule } from './threats/threats-store.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	imports: [
		UsersModule,
		ThreatsModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
	],
})
export class RootStoreModule { }
