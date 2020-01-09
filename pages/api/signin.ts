import { NextApiRequest, NextApiResponse } from 'next';
import { Token } from '~/modelTypes';

import Cookies from 'universal-cookie';
import Auth from '~/service/auth';

/*eslint @typescript-eslint/camelcase: ["error", {properties: "never"}]*/
const pseudoToken: Token = {
    access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNoaWJhIEtvdGFybyIsImlhdCI6MTU3NTQ0MzI4MiwiZXhwIjoxNjA5NDI2Nzk5fQ.DHZMvPjPCWMMyqo4v5oRM6ho3Miv4XwAxOr7gJBLyvc',
    refresh_token: 'GEbRxBN_pseudoRefreshToken_edjnXbL',
    type: 'Bearer'
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req.headers.cookie);
    console.log(cookies); // get HttpOnly directive cookie
    console.log(req.body); // get request body

    if (req.method === 'POST') {
        /**
         * @TODO
         * POST api `/auth/singin`
         */
        const accessAuth = new Auth(pseudoToken.access_token);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader(
            'Set-Cookie',
            `_token=${pseudoToken.access_token}; Path=/; Max-Age=${accessAuth.maxAgeAt}; HttpOnly`
        );
        res.statusCode = 201;
        res.end(JSON.stringify({ token: pseudoToken }));
    }
};
