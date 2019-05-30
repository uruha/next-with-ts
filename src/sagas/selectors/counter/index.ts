import { RootState } from '~/reducers';
import { CountState } from '~/stateTypes';

export const getCountState = (state: RootState): CountState => state.counter;
