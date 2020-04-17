import {
    INCREMENT,
    DECREMENT,
    UPDATE_COUNT,
    GET_ACCOUNT,
    UPDATE_ACCOUNT
} from '~/constant';
import { Account } from '~/modelTypes';

interface IncrementAction {
    type: typeof INCREMENT;
    payload: number;
}

interface DecrementAction {
    type: typeof DECREMENT;
    payload: number;
}

interface UpdateCountAction {
    type: typeof UPDATE_COUNT;
    payload: number;
}

export type CounterActionTypes =
    | IncrementAction
    | DecrementAction
    | UpdateCountAction;

interface GetAccountAction {
    type: typeof GET_ACCOUNT;
}

interface UpdateAccountAction {
    type: typeof UPDATE_ACCOUNT;
    payload: { data: Account };
}

export type AccountActionTypes = GetAccountAction | UpdateAccountAction;
