import { createAction, props } from '@ngrx/store';

import { Threat, PaginationConfig, FiltersConfig } from '../../shared/interfaces';

export const loadAllThreats = createAction('[Threats] Load All Threats');
export const loadAllThreatsSucceeded = createAction('[Threats] Load All Threats Succeeded', props<{ payload: { threats: Threat[] } }>());
export const loadAllThreatsFailed = createAction('[Threats] Load All Threats Failed', props<{ payload: Error }>());

export const loadPaginatedThreats = createAction(
	'[Threats] Load Paginated Threats',
	props<{ payload: { paginationConfig: PaginationConfig } }>(),
);
export const loadPaginatedThreatsSucceeded = createAction(
	'[Threats] Load Paginated Threats Succeeded',
	props<{ payload: { threats: Threat[] } }>(),
);
export const loadPaginatedThreatsFailed = createAction('[Threats] Load Paginated Threats Failed', props<{ payload: Error }>());

export const loadFilteredThreats = createAction('[Threats] Load Filtered Threats', props<{ payload: { filtersConfig: FiltersConfig } }>());
export const loadFilteredThreatsSucceeded = createAction(
	'[Threats] Load Filtered Threats Succeeded',
	props<{ payload: { threats: Threat[] } }>(),
);
export const loadFilteredThreatsFailed = createAction('[Threats] Load Filtered Threats Failed', props<{ payload: Error }>());

export const addThreat = createAction('[Threat] Add Threat', props<{ payload: { threatConfig: Threat } }>());
export const addThreatSucceeded = createAction('[Threat] Add Threat Succeeded', props<{ payload: { threat: Threat } }>());
export const addThreatFailed = createAction('[Threat] Add Threat Failed', props<{ payload: Error }>());

export const updateThreat = createAction('Threats] Update Threat', props<{ payload: { threatConfig: Threat } }>());
export const updateThreatSucceeded = createAction('Threats] Update Threat Succeeded', props<{ payload: { threat: Threat } }>());
export const updateThreatFailed = createAction('Threats] Update Threat Failed', props<{ payload: Error }>());

export const removeThreat = createAction('[Threats] Remove Threat', props<{ payload: { threatId: string } }>());
export const removeThreatSucceeded = createAction('[Threats] Remove Threat Succeeded', props<{ payload: { threat: Threat } }>());
export const removeThreatFailed = createAction('[Threats] Remove Threat Failed', props<{ payload: Error }>());
