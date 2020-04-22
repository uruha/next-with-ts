import { GET_ACCOUNT, UPDATE_ACCOUNT } from '~/constant';
import { AccountActionTypes } from '~/actionTypes';
import { Account } from '~/modelTypes';

export const getAccount = (): AccountActionTypes => ({
    type: GET_ACCOUNT
});

export const updateAccount = (account: Account): AccountActionTypes => ({
    type: UPDATE_ACCOUNT,
    payload: { data: account }
});
