import Koa, { ParameterizedContext } from 'koa';
import Router from 'koa-router';
import KoaHelmet from 'koa-helmet';
import next from 'next';

import Logger from 'bunyan';

const logOptions: Logger.LoggerOptions = {
    name: 'app',
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            stream: process.stderr
        }
    ],
    serializers: {
        req: req => ({
            method: req.method,
            url: req.url,
            referer: req.headers.referer
        }),
        err: Logger.stdSerializers.err
    }
};

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const logger = Logger.createLogger(logOptions);

app.prepare()
    .then(() => {
        const server = new Koa();
        const router = new Router();

        server.use(async (ctx, next) => {
            ctx.logger = logger;
            await next();
        });

        router.get('/health', async (ctx: ParameterizedContext<Logger>) => {
            await ctx.logger.info({ req: ctx.req }, 'HEALTH');
            ctx.status = 200;
            ctx.type = 'application/json';
            ctx.body = JSON.stringify({ uptime: process.uptime() });
        });

        router.get('*', async (ctx: ParameterizedContext<Logger>) => {
            await ctx.logger.info({ req: ctx.req }, 'REQUEST');
            await handle(ctx.req, ctx.res);
            ctx.respond = false;
        });

        router.post('*', async (ctx: ParameterizedContext<Logger>) => {
            await ctx.logger.info({ req: ctx.req }, 'REQUEST');
            await handle(ctx.req, ctx.res);
            ctx.respond = false;
        });

        server.use(async (ctx, next) => {
            ctx.res.statusCode = 200;
            await next();
        });

        server.use(KoaHelmet());
        server.use(router.routes());
        server.listen(port, () => {
            logger.info(`> Ready on localhost:${port}`);
        });
    })
    .catch((err: Error) => logger.error(err, 'Server prepared is faild.'));
