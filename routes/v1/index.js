'use strict';

const Router = require('koa-router');

const router = new Router();

// TODO: complete all routes ...

// health check

router.get('/test', async (ctx) => {
  ctx.status = 200;
  ctx.body = 'ok';
});

module.exports = router.routes();
