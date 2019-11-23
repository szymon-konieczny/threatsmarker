import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { State, adapter } from './state';

export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getCount = (state: State) => state.count;

export const selectThreatsStore: MemoizedSelector<object, State> = createFeatureSelector<State>('threats');

export const selectThreatsError: MemoizedSelector<object, string> = createSelector(selectThreatsStore, getError);
export const selectThreatsIsLoading: MemoizedSelector<object, boolean> = createSelector(selectThreatsStore, getIsLoading);
export const selectThreatsCount: MemoizedSelector<object, number> = createSelector(selectThreatsStore, getCount);

export const { selectAll } = adapter.getSelectors();
export const selectAllThreats = createSelector(selectThreatsStore, selectAll);
