import { NextApiRequest, NextApiResponse } from 'next';
import { Token } from '~/modelTypes';

import Cookies from 'universal-cookie';

/*eslint @typescript-eslint/camelcase: ["error", {properties: "never"}]*/
const pseudoToken: Token = {
    access_token: 'eyJz93a_pseudoAccessToken_k4laUWw',
    refresh_token: 'GEbRxBN_pseudoRefreshToken_edjnXbL',
    type: 'Bearer'
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req.headers.cookie);
    console.log(cookies); // get HttpOnly directive cookie
    console.log(req.body);

    if (req.method === 'POST') {
        /**
         * @NOTE
         * POST `/auth/singin`
         */
        res.setHeader('Content-Type', 'application/json');
        res.setHeader(
            'Set-Cookie',
            `_token=${pseudoToken.access_token}; Path=/; Max-Age=30000; HttpOnly`
        );
        res.statusCode = 201;
        res.end(JSON.stringify({ token: pseudoToken }));
    }
};
