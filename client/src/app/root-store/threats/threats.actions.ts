import { createAction } from '@ngrx/store';

export const loadAllThreads = createAction('[Threads] Load All Threads');
export const loadAllThreadsSucceeded = createAction('[Threads] Load All Threads Succeeded');
export const loadAllThreadsFailed = createAction('[Threads] Load All Threads Failed');

export const loadPaginatedThreads = createAction('[Threads] Load Paginated Threads');
export const loadPaginatedThreadsSucceeded = createAction('[Threads] Load Paginated Threads Succeeded');
export const loadPaginatedThreadsFailed = createAction('[Threads] Load Paginated Threads Failed');

export const loadFilteredThreads = createAction('[Threats] Load Filtered Threats');
export const loadFilteredThreadsSucceeded = createAction('[Threats] Load Filtered Threats Succeeded');
export const loadFilteredThreadsFailed = createAction('[Threats] Load Filtered Threats Failed');

export const addThreat = createAction('[Threat] Add Threat');
export const addThreatSucceeded = createAction('[Threat] Add Threat Succeeded');
export const addThreatFailed = createAction('[Threat] Add Threat Failed');

export const updateThreat = createAction('Threats] Update Threat');
export const updateThreatSucceeded = createAction('Threats] Update Threat Succeeded');
export const updateThreatFailed = createAction('Threats] Update Threat Failed');

export const removeThreat = createAction('[Threats] Remove Threat');
export const removeThreatSucceeded = createAction('[Threats] Remove Threat Succeeded');
export const removeThreatFailed = createAction('[Threats] Remove Threat Failed');
