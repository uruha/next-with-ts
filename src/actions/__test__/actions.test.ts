/* eslint-env jest */
import { INCREMENT, DECREMENT } from '~/constant';
import { counterActions } from '~/actions';

describe('Counter actions', () => {
    it('should create increment action', () => {
        const wantToIncrementNumber = 1;
        const expectedAction = {
            type: INCREMENT,
            payload: wantToIncrementNumber
        };

        expect(counterActions.increment(1)).toEqual(expectedAction);
    });

    it('should create decrement action', () => {
        const wantToDecrementNumber = 3;
        const expectedAction = {
            type: DECREMENT,
            payload: wantToDecrementNumber
        };

        expect(counterActions.decrement(3)).toEqual(expectedAction);
    });
});
