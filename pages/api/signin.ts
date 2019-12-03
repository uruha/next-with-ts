import { NextApiRequest, NextApiResponse } from 'next';
import { Token } from '~/modelTypes';

/*eslint @typescript-eslint/camelcase: ["error", {properties: "never"}]*/
const pseudoToken: Token = {
    access_token: 'eyJz93a_pseudoAccessToken_k4laUWw',
    refresh_token: 'GEbRxBN_pseudoRefreshToken_edjnXbL',
    type: 'Bearer'
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        /**
         * @NOTE
         * next step
         * POST `/auth/singin`
         */
        res.status(201).json({ token: pseudoToken });
    }
};
