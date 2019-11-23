import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Threat } from '../../shared/interfaces';

export interface State extends EntityState<Threat> {
	count: number;
	isLoading: boolean;
	error: string;
}

export const defaultThreats: State = {
	ids: [],
	entities: {},
	count: null,
	isLoading: false,
	error: null,
};

export const adapter: EntityAdapter<Threat> = createEntityAdapter<Threat>();

export const initialState: State = adapter.getInitialState(defaultThreats);

