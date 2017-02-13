'use strict';

const render = require('../render');
const ERROR_CODE = require('./constants').ERROR_CODE;

class MongoErrorHandler {
  shouldHandleError(error) {
    return error.name === 'MongoError';
  }

  handle(ctx, error) {
    render(ctx, 500, {
      error: ERROR_CODE.uniqueConstraints,
      message: error.message
    });
  }
}

module.exports = new MongoErrorHandler();
