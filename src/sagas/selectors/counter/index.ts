import { GetAnyState } from 'types';
import { RootState } from '~/reducers';
import { CountState } from '~/stateTypes';

export const getCountState: GetAnyState<RootState, CountState> = state =>
    state.counter;
