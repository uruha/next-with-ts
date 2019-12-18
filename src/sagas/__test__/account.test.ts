import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import { accountActions } from '~/actions/account';

import {
    handleRequestGetAccount,
    runRequestGetAccount
} from '~/sagas/tasks/account';

import { Account } from '~/modelTypes';

const testingAccount: Account = {
    email: 'kotaro@example.com',
    nickname: 'Jankovic'
};

describe('Account Tasks', () => {
    it('takeevery run handleRequestGetAccount', () => {
        return expectSaga(handleRequestGetAccount)
            .dispatch(accountActions.getAccount())
            .silentRun();
    });

    it('get account API call [success]', () => {
        return expectSaga(runRequestGetAccount)
            .provide([
                [matchers.call.fn(() => ''), JSON.stringify(testingAccount)]
            ])
            .run(false);
    });

    it('get account API call [failed]', () => {
        const error = new Error('Expire is over.');

        return expectSaga(runRequestGetAccount)
            .provide([[matchers.call.fn(() => ''), throwError(error)]])
            .run(false);
    });
});
