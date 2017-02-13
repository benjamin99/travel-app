'use strict';

const render = require('../render');
const ERROR_CODE = require('./constants').ERROR_CODE;

class DefaultErrorHandler {
  shouldHandleError(error) {
    return true;
  }

  handle(ctx, error) {
    render(ctx, 500, {
      error: ERROR_CODE.unknown,
      message: error.message
    });
  }
}

module.exports = new DefaultErrorHandler();
