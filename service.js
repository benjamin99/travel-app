'use strict';

const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const compress = require('koa-compress');
const converter = require('koa-convert');
const routes = require('./routes');

const app = new koa();
require('koa-qs')(app);

app.env = process.env.NODE_ENV || 'development';
app.proxy = true;

// health check:
app.use(async (ctx, next) => {
  if (ctx.url !== '/' || ctx.method !== 'GET') {
    return await next();
  }

  ctx.status = 200;
  ctx.body = 'ok';
});

app.use(converter(compress()));
app.use(converter(bodyparser()));

app.use(routes);

module.exports = app;
