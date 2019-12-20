import { expectSaga } from 'redux-saga-test-plan';
import { counterActions } from '~/actions';

import {
    handleRequestIncrementCount,
    handleRequestDecrementCount
} from '~/sagas/tasks/counter';

describe('Counter tasks', () => {
    it('increment task', () => {
        return expectSaga(handleRequestIncrementCount)
            .withState({ counter: { count: 0 } })
            .dispatch(counterActions.increment(1))
            .put(counterActions.updateCount(1))
            .silentRun();
    });

    it('decrement task', () => {
        return expectSaga(handleRequestDecrementCount)
            .withState({ counter: { count: 1 } })
            .dispatch(counterActions.decrement(1))
            .put(counterActions.updateCount(0))
            .silentRun();
    });
});
