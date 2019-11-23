import { createAction, props } from '@ngrx/store';

import { Threat, RequestConfig } from '../../shared/interfaces';

export enum ThreatsActions {
	LOAD_THREATS = '[Threats] Load Threats',
	LOAD_THREATS_SUCCEEDED = '[Threats] Load Threats Succeeded',
	LOAD_THREATS_FAILED = '[Threats] Load Threats Failed',

	ADD_THREAT = '[Threat] Add Threat',
	ADD_THREAT_SUCCEEDED = '[Threat] Add Threat Succeeded',
	ADD_THREAT_FAILED = '[Threat] Add Threat Failed',

	UPDATE_THREAT = 'Threats] Update Threat',
	UPDATE_THREAT_SUCCEEDED = 'Threats] Update Threat Succeeded',
	UPDATE_THREAT_FAILED = 'Threats] Update Threat Failed',

	REMOVE_THREAT = '[Threats] Remove Threat',
	REMOVE_THREAT_SUCCEEDED = '[Threats] Remove Threat Succeeded',
	REMOVE_THREAT_FAILED = '[Threats] Remove Threat Failed',
}

export const loadThreats = createAction(
	ThreatsActions.LOAD_THREATS,
	props<{ payload: { requestConfig: RequestConfig } }>(),
);
export const loadThreatsSucceeded = createAction(
	ThreatsActions.LOAD_THREATS_SUCCEEDED,
	props<{ payload: { threats: Threat[], count: number } }>(),
);
export const loadThreatsFailed = createAction(ThreatsActions.LOAD_THREATS_FAILED, props<{ payload: Error }>());

export const addThreat = createAction(ThreatsActions.ADD_THREAT, props<{ payload: { threatConfig: Threat } }>());
export const addThreatSucceeded = createAction(ThreatsActions.ADD_THREAT_SUCCEEDED, props<{ payload: { threat: Threat } }>());
export const addThreatFailed = createAction(ThreatsActions.ADD_THREAT_FAILED, props<{ payload: Error }>());

export const updateThreat = createAction(ThreatsActions.UPDATE_THREAT, props<{ payload: { threatConfig: Threat } }>());
export const updateThreatSucceeded = createAction(ThreatsActions.UPDATE_THREAT_SUCCEEDED, props<{ payload: { threat: Threat } }>());
export const updateThreatFailed = createAction(ThreatsActions.UPDATE_THREAT_FAILED, props<{ payload: Error }>());

export const removeThreat = createAction(ThreatsActions.REMOVE_THREAT, props<{ payload: { threatId: string } }>());
export const removeThreatSucceeded = createAction(ThreatsActions.REMOVE_THREAT_SUCCEEDED, props<{ payload: { threat: Threat } }>());
export const removeThreatFailed = createAction(ThreatsActions.REMOVE_THREAT_FAILED, props<{ payload: Error }>());
