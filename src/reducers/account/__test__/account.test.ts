import snapshotDiff from 'snapshot-diff';
import { accountActions } from '~/actions';

import { initialAccount, account } from '~/reducers/account';
import { Account } from '~/modelTypes';

const testingAccount: Account = {
    email: 'test@example.com',
    nickname: 'snapshot testing'
};

describe('Account reducer', () => {
    it('update account', () => {
        expect(
            snapshotDiff(
                initialAccount,
                account(
                    initialAccount,
                    accountActions.updateAccount(testingAccount)
                )
            )
        ).toMatchSnapshot();
    });
});
