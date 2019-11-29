import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as ThreatsReducer from './threats.reducer';
import { ThreatsEffects } from './threats.effects';

const FEATURE_NAME = 'threats';

@NgModule({
	imports: [
		StoreModule.forFeature(FEATURE_NAME, ThreatsReducer),
		EffectsModule.forFeature([ThreatsEffects]),
	]
})
export class ThreatsModule { }
