import { GET_ACCOUNT, UPDATE_ACCOUNT } from '~/constant';
import { Account } from '~/modelTypes';

interface GetAccountAction {
    type: typeof GET_ACCOUNT;
}

interface UpdateAccountAction {
    type: typeof UPDATE_ACCOUNT;
    payload: { data: Account };
}

export type AccountActionTypes = GetAccountAction | UpdateAccountAction;
