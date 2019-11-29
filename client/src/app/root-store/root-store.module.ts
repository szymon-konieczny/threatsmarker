import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersModule } from './users/users-store.module';
import { ThreatsModule } from './threats/threats-store.module';

@NgModule({
	imports: [
		UsersModule,
		ThreatsModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
	],
})
export class RootStoreModule { }
