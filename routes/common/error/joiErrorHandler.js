'use strict';

const render = require('../render');
const ERROR_CODE = require('./constants').ERROR_CODE;

class JoiErrorHandler {
  shouldHandleError(error) {
    return error.name === 'ValidationError'
  }

  handle(ctx, error) {
    render(ctx, 400, {
      error: ERROR_CODE.validation,
      message: error.message
    });
  }
}

module.exports = new JoiErrorHandler();
