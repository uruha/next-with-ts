import { NextApiRequest, NextApiResponse } from 'next';
import { judgeIsMobile } from '~/lib/ua';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const legacyUA = req.headers['user-agent'];
    const CHUAM = req.headers['sec-ch-ua-mobile'];

    const isMobile = judgeIsMobile(legacyUA, CHUAM);

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify({ isMobile }));
};
