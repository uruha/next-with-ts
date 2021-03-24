import { SelectAnyState } from 'types';
import { RootState } from '~/reducers';
import { AccountState } from '~/stateTypes';

export const getAccountState: SelectAnyState<RootState, AccountState> = state =>
    state.account;
