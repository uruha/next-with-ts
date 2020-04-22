/* eslint-env jest */
import snapshotDiff from 'snapshot-diff';
import { counterActions } from '~/actions';

import { counter, initialCounter } from '~/reducers/counter';

describe('Counter reducer', () => {
    it('update testing', () => {
        expect(
            snapshotDiff(
                initialCounter,
                counter(initialCounter, counterActions.updateCount(1))
            )
        ).toMatchSnapshot();
    });
});
