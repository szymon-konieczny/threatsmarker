import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State as ThreatsState } from './state';
import * as fromThreats from './';
import { Threat, PaginationConfig, FiltersConfig } from '../../shared/interfaces';

@Injectable()
export class ThreatsFacade {
	public error$ = this.store.select(fromThreats.ThreatsSelectors.selectThreatsError);
	public isLoading$ = this.store.select(fromThreats.ThreatsSelectors.selectThreatsIsLoading);

	public threatsStore$ = this.store.select(fromThreats.ThreatsSelectors.selectThreatsStore);
	public threats$ = this.store.select(fromThreats.ThreatsSelectors.selectAllThreats);

	constructor(private store: Store<ThreatsState>) { }

	public loadAllThreats() {
		this.store.dispatch(fromThreats.ThreatsActions.loadAllThreats());
	}

	public loadPaginatedThreats(paginationConfig: PaginationConfig) {
		this.store.dispatch(fromThreats.ThreatsActions.loadPaginatedThreats({ payload: { paginationConfig } }));
	}

	public loadFilteredThreats(filtersConfig: FiltersConfig) {
		this.store.dispatch(fromThreats.ThreatsActions.loadFilteredThreats({ payload: { filtersConfig } }));
	}

	public addThreat(threatConfig: Threat) {
		this.store.dispatch(fromThreats.ThreatsActions.addThreat({ payload: { threatConfig } }));
	}

	public updateThreat(threatConfig: Threat) {
		this.store.dispatch(fromThreats.ThreatsActions.updateThreat({ payload: { threatConfig } }));
	}

	public removeThreat(threatId: string) {
		this.store.dispatch(fromThreats.ThreatsActions.removeThreat({ payload: { threatId } }));
	}
}
