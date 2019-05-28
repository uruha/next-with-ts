/* eslint-env jest */
import * as snapshotDiff from 'snapshot-diff';
import { counterActions } from '~/actions';

import { counter, initialState } from '~/reducers';

describe('Counter reducer', () => {
    it('update testing', () => {
        expect(
            snapshotDiff(
                initialState,
                counter(initialState, counterActions.updateCount(1))
            )
        ).toMatchSnapshot();
    });
});
