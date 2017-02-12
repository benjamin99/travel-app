'use strict';

const ERROR_CODE = {
  // 1000: common error
  unknown: 1000,

  // 1100: validation error
  validation: 1100,

  // 1200: Resource error
  userNotFound: 1200,
  transactionNotFound: 1201
};

module.exports.ERROR_CODE = ERROR_CODE;
