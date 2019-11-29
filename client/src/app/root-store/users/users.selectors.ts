import { createSelector, createFeatureSelector, MemoizedSelector } from '@ngrx/store';

import { State, adapter } from './state';

export const getSelectedUserId = (state: State) => state.selectedUserId;
export const getIsLoading = (state: State) => state.isLoading;
export const getError = (state: State) => state.error;
export const getCount = (state: State) => state.count;

export const selectUsersStore: MemoizedSelector<object, State> = createFeatureSelector<State>('users');

export const selectUserId: MemoizedSelector<object, string> = createSelector(selectUsersStore, getSelectedUserId);
export const selectUsersIsLoading: MemoizedSelector<object, boolean> = createSelector(selectUsersStore, getIsLoading);
export const selectUsersError: MemoizedSelector<object, string> = createSelector(selectUsersStore, getError);
export const selectUsersCount: MemoizedSelector<object, number> = createSelector(selectUsersStore, getCount);

export const { selectAll } = adapter.getSelectors();
export const selectAllUsers = createSelector(selectUsersStore, selectAll);
