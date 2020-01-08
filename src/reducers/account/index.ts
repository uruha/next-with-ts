import { UPDATE_ACCOUNT } from '~/constant';
import { AccountActionTypes } from '~/actionTypes';
import { AccountState } from '~/stateTypes';

export const initialAccount: AccountState = {
    data: { email: '', nickname: '' }
};

export const account = (
    state = initialAccount,
    action: AccountActionTypes
): AccountState => {
    switch (action.type) {
        case UPDATE_ACCOUNT:
            return { ...state, data: action.payload.data };
        default:
            return state;
    }
};
