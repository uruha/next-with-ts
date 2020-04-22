import { GET_ACCOUNT, UPDATE_ACCOUNT } from '~/constant';
import { Account } from '~/modelTypes';
import { accountActions } from '~/actions';

describe('Account actions', () => {
    it('should create get account action', () => {
        const expectedAction = {
            type: GET_ACCOUNT
        };

        expect(accountActions.getAccount()).toEqual(expectedAction);
    });

    it('should create update accont action', () => {
        const expectedPayload: Account = {
            nickname: 'Test',
            email: 'accout@test.com'
        };
        const expectedAction = {
            type: UPDATE_ACCOUNT,
            payload: {
                data: {
                    nickname: expectedPayload.nickname,
                    email: expectedPayload.email
                }
            }
        };

        expect(accountActions.updateAccount(expectedPayload)).toEqual(
            expectedAction
        );
    });
});
