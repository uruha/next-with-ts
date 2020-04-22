import { takeEvery, call, put } from 'redux-saga/effects';
import { GET_ACCOUNT } from '~/constant';
import { accountActions } from '~/actions';
import { Account } from '~/modelTypes';

import fetch from 'isomorphic-unfetch';

export function* runRequestGetAccount() {
    try {
        const response = yield call(() => fetch('/api/account'));
        if (response.status === 200) {
            const account: Account = yield response.json();
            yield put(accountActions.updateAccount(account));
        }
    } catch (err) {
        // WIP
        yield console.log(err);
    }
}

export function* handleRequestGetAccount() {
    yield takeEvery(GET_ACCOUNT, runRequestGetAccount);
}
