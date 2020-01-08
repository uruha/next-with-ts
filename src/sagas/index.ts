import { fork } from 'redux-saga/effects';
import {
    handleRequestIncrementCount,
    handleRequestDecrementCount
} from '~/sagas/tasks/counter';
import { handleRequestGetAccount } from '~/sagas/tasks/account';

export default function* rootSaga() {
    yield fork(handleRequestIncrementCount);
    yield fork(handleRequestDecrementCount);
    yield fork(handleRequestGetAccount);
}
