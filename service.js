'use strict';

const koa = require('koa');
const bodyparser = require('koa-bodyparser');
const compress = require('koa-compress');
const converter = require('koa-convert');

const app = new koa();
require('koa-qs')(app);

app.env = process.env.NODE_ENV || 'development';
app.proxy = true;

app.use(converter(compress()));
app.use(bodyparser());

// TODO: add routes

module.exports = app;
