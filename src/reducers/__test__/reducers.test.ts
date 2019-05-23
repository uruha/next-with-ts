/* eslint-env jest */
import snapshotDiff from 'snapshot-diff';
import { counterActions } from '../../actions';

import { counter, initialState } from '../';

describe('Counter reducer', () => {
    it('increment testing', () => {
        expect(
            snapshotDiff(
                initialState,
                counter(initialState, counterActions.increment(1))
            )
        ).toMatchSnapshot();
    });

    it('increment testing', () => {
        expect(
            snapshotDiff(
                initialState,
                counter(initialState, counterActions.decrement(1))
            )
        ).toMatchSnapshot();
    });
});
