import { SelectAnyState } from 'types';
import { RootState } from '~/reducers';
import { CountState } from '~/stateTypes';

export const getCountState: SelectAnyState<RootState, CountState> = state =>
    state.counter;
