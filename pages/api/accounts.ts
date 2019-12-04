import { NextApiRequest, NextApiResponse } from 'next';
import { Account } from '~/modelTypes';

import Cookies from 'universal-cookie';
import Auth from '~/service/auth';

const pseudoAccount: Account = {
    email: 'kotaro@example.com',
    nickname: 'Jankovic'
};

export default (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = new Cookies(req.headers.cookie);
    const accessAuth = new Auth(cookies.get('_token'));

    /**
     * @NOTE
     * Create recycle utility ?
     */

    if (!accessAuth.isAuthenticated) {
        res.status(401).send('Expire is over.');
        return;
    }

    /**
     * @TODO
     * GET api `/accounts/me`
     */
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Authorization', `${accessAuth.authorizationString}`);
    res.statusCode = 200;
    res.end(JSON.stringify(pseudoAccount));
};
