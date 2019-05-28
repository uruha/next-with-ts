import { take, select, put } from 'redux-saga/effects';
import { INCREMENT, DECREMENT } from '~/constant';
import { counterActions } from '~/actions';

import { getCountState } from '~/sagas/selectors/counter';

export function* handleRequestIncrementCount() {
    while (true) {
        const { payload } = yield take(INCREMENT);
        const counter = yield select(getCountState);

        const res = counter.count + payload;
        yield put(counterActions.updateCount(res));
    }
}

export function* handleRequestDecrementCount() {
    while (true) {
        const { payload } = yield take(DECREMENT);
        const counter = yield select(getCountState);

        const res = counter.count - payload;
        yield put(counterActions.updateCount(res));
    }
}
