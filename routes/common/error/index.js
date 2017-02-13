'use strict';

const joiErrorHandler = require('./joiErrorHandler');
const defaultErrorHandler = require('./defaultErrorHandler');
const mongoErrorHandler = require('./mongoErrorHandler');

/** error codes */

const ERROR_CODE = require('./constants').ERROR_CODE;

/** error handlers */

const ERROR_HANDLERS = new Array();
ERROR_HANDLERS.push(joiErrorHandler);
ERROR_HANDLERS.push(mongoErrorHandler);

function getErrorHandler(error) {
  for (const handler of ERROR_HANDLERS) {

    console.log(handler);

    if (handler.shouldHandleError(error)) {
      return handler;
    }
  }

  return defaultErrorHandler;
}

async function middleware(ctx, next) {
  try {
    await next();
  } catch(error) {
    const handler = getErrorHandler(error);
    return handler.handle(ctx, error);
  }
}

module.exports.middleware = middleware;