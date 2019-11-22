import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, pluck, mergeMap } from 'rxjs/operators';

import { ThreatsHttpService } from '../../core/services';
import { ThreatsActions } from './';

@Injectable()
export class ThreatsEffects {
	constructor(
		private actions$: Actions,
		private threatsHttpService: ThreatsHttpService,
	) { }

	public loadPaginatedThreats$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.loadPaginatedThreats),
		pluck('payload'),
		switchMap(({ requestConfig }) => this.threatsHttpService.getPaginatedThreats(requestConfig).pipe(
			map(threats => ThreatsActions.loadPaginatedThreatsSucceeded({ payload: { threats } })),
			catchError(error => of(ThreatsActions.loadPaginatedThreatsFailed(error))),
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
