import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromThreats from '.';

@NgModule({
	imports: [
		StoreModule.forFeature('users', fromThreats.ThreatsReducer),
		EffectsModule.forFeature([fromThreats.ThreatsEffects]),
	]
})
export class ThreatsModule { }
