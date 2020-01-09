import { NextApiRequest, NextApiResponse } from 'next';

// import Cookies from 'universal-cookie';

export default (req: NextApiRequest, res: NextApiResponse) => {
    // const cookies = new Cookies(req.headers.cookie);

    if (req.method === 'POST') {
        /**
         * @TODO
         * POST api `/auth/signout`
         */
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Set-Cookie', '_token=; Path=/; Max-Age=0; HttpOnly');
        res.statusCode = 204;
        res.end();
    }
};
