'use strict';

const Router = require('koa-router');
const converter = require('koa-convert');
const etag = require('koa-etag');
const cors = require('kcors');
const conditional = require('koa-conditional-get');
const error = require('./common/error');
const v1 = require('./v1');

const router = new Router();

router.use(etag());
router.use(converter(cors()));
router.use(converter(conditional()));
router.use(error.middleware);
router.use('/v1', v1);

module.exports = router.routes();
