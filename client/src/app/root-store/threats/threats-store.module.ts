import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as ThreatsReducer from './threats.reducer';
import { ThreatsEffects } from './threats.effects';

@NgModule({
	imports: [
		StoreModule.forFeature('threats', ThreatsReducer),
		EffectsModule.forFeature([ThreatsEffects]),
	]
})
export class ThreatsModule { }
