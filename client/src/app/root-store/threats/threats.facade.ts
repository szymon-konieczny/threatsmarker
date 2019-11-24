import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State as ThreatsState } from './state';
import * as fromThreats from './';
import { Threat, RequestConfig } from '../../shared/interfaces';

@Injectable()
export class ThreatsFacade {
	public error$ = this.store.select(fromThreats.ThreatsSelectors.selectThreatsError);
	public isLoading$ = this.store.select(fromThreats.ThreatsSelectors.selectThreatsIsLoading);
	public count$ = this.store.select(fromThreats.ThreatsSelectors.selectThreatsCount);

	public threatsStore$ = this.store.select(fromThreats.ThreatsSelectors.selectThreatsStore);
	public threats$ = this.store.select(fromThreats.ThreatsSelectors.selectAllThreats);

	constructor(private store: Store<ThreatsState>) { }

	public loadThreats(requestConfig: RequestConfig) {
		this.store.dispatch(fromThreats.ThreatsActions.loadThreats({ payload: { requestConfig } }));
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
