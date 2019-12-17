import Auth from '~/service/auth';
import { AccessToken } from '~/modelTypes';

/**
 * @NOTE
 * when to decode pseduoAccessToken by jwt,
 * this breakdown payload is as follows...
 * [PAYLOAD]:
 * {
 *   "sub": "1234567890",
 *   "name": "Chiba Kotaro",
 *   "iat": 1575443282,
 *   "exp": 4133948399
 * }
 */
const pseudoAccessToken: AccessToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNoaWJhIEtvdGFybyIsImlhdCI6MTU3NTQ0MzI4MiwiZXhwIjo0MTMzOTQ4Mzk5fQ.qOtJ374Wch52YXmIshB-z2hqIydHDj0RgkxvancC96c';

/**
 * @NOTE
 * this expire is '2100/12/31 23:59:59 GMT+0900'
 */
const testingExpire = 4133948399;

describe('Auth service [Normal system]', () => {
    let auth: Auth;

    beforeAll(() => {
        auth = new Auth(pseudoAccessToken);
    });

    it('when Auth class instantiate, decoded token expire is expected', () => {
        expect(auth.decodedToken.exp).toBe(testingExpire);
    });

    it('get expire', () => {
        expect(auth.expiresAt).toStrictEqual(new Date(testingExpire * 1000));
    });

    it('get max-age', () => {
        expect(auth.maxAgeAt).toBe(
            testingExpire - Date.parse(new Date().toString()) / 1000
        );
    });

    it('determining if it has expired', () => {
        expect(auth.isExpired).toBe(false);
    });

    it('determining if it has authenticated', () => {
        expect(auth.isAuthenticated).toBe(true);
    });

    it('get authorization bearer string', () => {
        expect(auth.authorizationString).toBe(`Bearer ${pseudoAccessToken}`);
    });
});

describe('Auth service [Abnormal]', () => {
    let auth: Auth;

    beforeAll(() => {
        auth = new Auth();
    });

    it('when Auth class instantiate with no token, decoded token expire is 0', () => {
        expect(auth.decodedToken.exp).toBe(0);
    });

    it('determining if it has expired', () => {
        expect(auth.isExpired).toBe(true);
    });

    it('determining if it has authenticated', () => {
        expect(auth.isAuthenticated).toBe(false);
    });
});
