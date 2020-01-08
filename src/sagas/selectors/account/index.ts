import { RootState } from '~/reducers';
import { AccountState } from '~/stateTypes';

export const getAccountState = (state: RootState): AccountState =>
    state.account;
