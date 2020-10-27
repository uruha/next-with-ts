type LegacyUA = string | undefined;
type CHUAM = string | string[] | undefined;

export const judgeIsMobile = (legacyUA: LegacyUA, CHUAM: CHUAM): boolean => {
    let isLegacyMobile = false;
    let isCHMobile = false;

    /** Legacy User-Agent judgment */
    if (legacyUA) {
        const isIOS = /iP(hone|(o|a)d)/.test(legacyUA);
        const isAndroid = /Android/.test(legacyUA);
        isLegacyMobile = isIOS || isAndroid;
    }

    /**
     * Client Hints judgment for Chromium
     * CHUAM (sec-ch-ua-mobile) has `?0 (false)` or `?1 (true)` judgment value.
     */
    if (typeof CHUAM === 'string') {
        const capture = /^\?(?<mobile>\d{1})$/.exec(CHUAM);
        const hasMobile = capture?.groups?.mobile || '0';
        isCHMobile = Boolean(parseInt(hasMobile));
    }

    return isLegacyMobile || isCHMobile;
};
