import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ThreatsEffects, threatsReducer } from './';
import { ThreatsFacade } from './threats.facade';

const FEATURE_NAME = 'threats';

@NgModule({
	providers: [ThreatsFacade],
	imports: [
		StoreModule.forFeature(FEATURE_NAME, threatsReducer),
		EffectsModule.forFeature([ThreatsEffects]),
	]
})
export class ThreatsModule { }
