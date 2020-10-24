import { judgeIsMobile } from '~/lib/ua';

describe('User agent judge for mobile', () => {
    describe('[mobile: true]', () => {
        it(' [legacy: iOS] [Client Hints: ?1]', () => {
            const legacyUA =
                'Mozilla /5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B5110e Safari/601.1';
            const CHUAM = '?1';

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(true);
        });

        it('[legacy: Android] [Client Hints: ?1]', () => {
            const legacyUA =
                'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
            const CHUAM = '?1';

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(true);
        });

        it('[legacy: iOS] [Client Hints: NaN]', () => {
            const legacyUA =
                'Mozilla /5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B5110e Safari/601.1';
            const CHUAM = undefined;

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(true);
        });

        it('[legacy: Android] [Client Hints: NaN]', () => {
            const legacyUA =
                'Mozilla/5.0 (Linux; U; Android 2.2.1; en-us; Nexus One Build/FRG83) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';
            const CHUAM = undefined;

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(true);
        });

        it('[legacy: NaN] [Client Hints: ?1]', () => {
            const legacyUA = undefined;
            const CHUAM = '?1';

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(true);
        });
    });

    describe('[mobile: false]', () => {
        it('[legacy: any PC] [Client Hints: ?0]', () => {
            const legacyUA =
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36';
            const CHUAM = '?0';

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(false);
        });

        it('[legacy: any PC] [Client Hints: NaN]', () => {
            const legacyUA =
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36';
            const CHUAM = undefined;

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(false);
        });

        it('[legacy: NaN] [Client Hints: ?0]', () => {
            const legacyUA = undefined;
            const CHUAM = '?0';

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(false);
        });

        it('[legacy: NaN] [Client Hints: NaN]', () => {
            const legacyUA = undefined;
            const CHUAM = undefined;

            expect(judgeIsMobile(legacyUA, CHUAM)).toBe(false);
        });
    });
});
