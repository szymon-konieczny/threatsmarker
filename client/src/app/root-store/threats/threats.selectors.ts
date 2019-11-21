import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { State, adapter } from './state';

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;

export const selectThreatsStore: MemoizedSelector<object, State> = createFeatureSelector<State>('users');

export const selectThreatsError: MemoizedSelector<object, string> = createSelector(selectThreatsStore, getError);
export const selectThreatsIsLoading: MemoizedSelector<object, boolean> = createSelector(selectThreatsStore, getIsLoading);

export const { selectAll } = adapter.getSelectors();
export const selectAllThreats = createSelector(selectThreatsStore, selectAll);
