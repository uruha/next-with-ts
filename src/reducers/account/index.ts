import { Reducer } from 'redux';
import { UPDATE_ACCOUNT } from '~/constant';
import { AccountActionTypes } from '~/actionTypes';
import { AccountState } from '~/stateTypes';

export const initialAccount: AccountState = {
    data: { email: '', nickname: '' }
};

export const account: Reducer<AccountState, AccountActionTypes> = (
    state = initialAccount,
    action
) => {
    switch (action.type) {
        case UPDATE_ACCOUNT:
            return { ...state, data: action.payload.data };
        default:
            return state;
    }
};
