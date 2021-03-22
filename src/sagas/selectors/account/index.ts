import { GetAnyState } from 'types';
import { RootState } from '~/reducers';
import { AccountState } from '~/stateTypes';

export const getAccountState: GetAnyState<RootState, AccountState> = state =>
    state.account;
