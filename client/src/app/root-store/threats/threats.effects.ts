import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, pluck, mergeMap } from 'rxjs/operators';

import { ThreatsHttpService } from '../../core/services';
import * as ThreatsActions from './threats.actions';

@Injectable()
export class ThreatsEffects {
	constructor(
		private actions$: Actions,
		private threatsHttpService: ThreatsHttpService,
	) { }

	public loadThreats$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.loadThreats),
		pluck('payload'),
		switchMap(({ requestConfig }) => this.threatsHttpService.getThreats(requestConfig).pipe(
			map((res, count) => ThreatsActions.loadThreatsSucceeded({ payload: { threats: res.data, count } })),
			catchError(error => of(ThreatsActions.loadThreatsFailed(error))),
		)),
	));

	public addThreat$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.addThreat),
		pluck('payload'),
		mergeMap(data => this.threatsHttpService.addThreat(data.threatConfig).pipe(
			map(threat => ThreatsActions.addThreatSucceeded({ payload: { threat } })),
			catchError(error => of(ThreatsActions.addThreatFailed(error))),
		)),
	));

	public updateThreat$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.updateThreat),
		pluck('payload'),
		mergeMap(data => this.threatsHttpService.updateThreat(data.threatConfig).pipe(
			map(threat => ThreatsActions.updateThreatSucceeded({ payload: { threat } })),
			catchError(error => of(ThreatsActions.updateThreatFailed(error))),
		)),
	));

	public removeThreat$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.removeThreat),
		pluck('payload'),
		mergeMap(data => this.threatsHttpService.removeThreat(data.threatId).pipe(
			map(threat => ThreatsActions.removeThreatSucceeded({ payload: { threat } })),
			catchError(error => of(ThreatsActions.removeThreatFailed(error))),
		)),
	));
}
