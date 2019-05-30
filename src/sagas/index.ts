import { fork } from 'redux-saga/effects';
import {
    handleRequestIncrementCount,
    handleRequestDecrementCount
} from '~/sagas/tasks/counter';

export default function* rootSaga() {
    yield fork(handleRequestIncrementCount);
    yield fork(handleRequestDecrementCount);
}
