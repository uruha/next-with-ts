import { expectSaga } from 'redux-saga-test-plan';
import {
    handleRequestIncrementCount,
    handleRequestDecrementCount
} from '~/sagas/tasks/counter';

describe('Counter tasks', () => {
    it('increment task', () => {
        return expectSaga(handleRequestIncrementCount)
            .withState({ counter: { count: 0 } })
            .dispatch({ type: 'INCREMENT', payload: 1 })
            .put({ type: 'UPDATE_COUNT', payload: 1 })
            .run();
    });

    it('decrement task', () => {
        return expectSaga(handleRequestDecrementCount)
            .withState({ counter: { count: 1 } })
            .dispatch({ type: 'DECREMENT', payload: 1 })
            .put({ type: 'UPDATE_COUNT', payload: 0 })
            .run();
    });
});
