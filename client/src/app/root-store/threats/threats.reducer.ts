import { createReducer, on, Action } from '@ngrx/store';

import { initialState, adapter, State } from './state';
import { ThreatsActions } from './';

export const threatsReducer = createReducer(
	initialState,
	// loadPaginatedThreats
	on(ThreatsActions.loadPaginatedThreats, state => ({ ...state, isLoading: true, error: null })),
	on(
		ThreatsActions.loadPaginatedThreatsSucceeded,
		(state, { payload }) => ({ ...adapter.addAll(payload.threats, state), isLoading: false, error: null }),
	),
	on(ThreatsActions.loadPaginatedThreatsFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// addThreat
	on(ThreatsActions.addThreat, state => ({ ...state, isLoading: true, error: null })),
	on(ThreatsActions.addThreatSucceeded, (state, { payload }) =>
		({ ...adapter.addOne(payload.threat, state), isLoading: false, error: null })),
	on(ThreatsActions.addThreatFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// updateThreat
	on(ThreatsActions.updateThreat, state => ({ ...state, isLoading: true, error: null })),
	on(
		ThreatsActions.updateThreatSucceeded,
		(state, { payload }) =>
			({ ...adapter.updateOne({ id: payload.threat.id, changes: payload.threat }, state), isLoading: false, error: null }),
	),
	on(ThreatsActions.updateThreatFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
	// removeThreat
	on(ThreatsActions.removeThreat, state => ({ ...state, isLoading: true, error: null })),
	on(ThreatsActions.removeThreatSucceeded, (state, { payload }) => ({ ...adapter.removeOne(payload.threat.id, state), })),
	on(ThreatsActions.removeThreatFailed, (state, { payload }) => ({ ...state, isLoading: false, error: payload.message })),
);

export function reducer(state: State, action: Action) {
	return threatsReducer(state, action);
}
