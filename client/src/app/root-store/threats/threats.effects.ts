import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, pluck, mergeMap } from 'rxjs/operators';

import { ThreatsService } from '../../core/services';
import { ThreatsActions } from './';

@Injectable()
export class ThreatsEffects {
	constructor(
		private actions$: Actions,
		private threatsService: ThreatsService,
	) { }

	public loadAllThreats$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.loadAllThreats),
		switchMap(() => this.threatsService.getAllThreats().pipe(
			map(threats => ThreatsActions.loadAllThreatsSucceeded({ payload: { threats } })),
			catchError(error => of(ThreatsActions.loadAllThreatsFailed(error))),
		)),
	));

	public loadPaginatedThreats$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.loadPaginatedThreats),
		pluck('payload'),
		switchMap(({ paginationConfig }) => this.threatsService.getPaginatedThreats(paginationConfig).pipe(
			map(threats => ThreatsActions.loadPaginatedThreatsSucceeded({ payload: { threats } })),
			catchError(error => of(ThreatsActions.loadPaginatedThreatsFailed(error))),
		)),
	));

	public loadFilteredThreats$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.loadFilteredThreats),
		pluck('payload'),
		switchMap(({ filtersConfig }) => this.threatsService.getFilteredThreats(filtersConfig).pipe(
			map(threats => ThreatsActions.loadFilteredThreatsSucceeded({ payload: { threats } })),
			catchError(error => of(ThreatsActions.loadFilteredThreatsFailed(error))),
		)),
	));

	public addThreat$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.addThreat),
		pluck('payload'),
		mergeMap(data => this.threatsService.addThreat(data.threatConfig).pipe(
			map(threat => ThreatsActions.addThreatSucceeded({ payload: { threat } })),
			catchError(error => of(ThreatsActions.addThreatFailed(error))),
		)),
	));

	public updateThreat$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.updateThreat),
		pluck('payload'),
		mergeMap(data => this.threatsService.updateThreat(data.threatConfig).pipe(
			map(threat => ThreatsActions.updateThreatSucceeded({ payload: { threat } })),
			catchError(error => of(ThreatsActions.updateThreatFailed(error))),
		)),
	));

	public removeThreat$ = createEffect(() => this.actions$.pipe(
		ofType(ThreatsActions.removeThreat),
		pluck('payload'),
		mergeMap(data => this.threatsService.removeThreat(data.threatId).pipe(
			map(threat => ThreatsActions.removeThreatSucceeded({ payload: { threat } })),
			catchError(error => of(ThreatsActions.removeThreatFailed(error))),
		)),
	));
}
