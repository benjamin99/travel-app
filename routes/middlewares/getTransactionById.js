'use strict';

const render = require('../common/render');
const models = require('../../models');
const error = require('../common/error');
const Transaction = models.Transaction;
const ERROR_CODE = error.ERROR_CODE;

function getTransactionById(options) {
  return async (ctx, next) => {
    const transactionId = ctx.params.id;
    let transaction;
    if (transactionId) {
      try {
        transaction = await Transaction.findById(transactionId);
      } catch (error) {
        if (error.name !== 'CastError') {
          throw error;
        }
      }
    }

    if (!transaction) {
      return render(ctx, 404, {
        error: ERROR_CODE.transactionNotFound,
        message: 'transaction not found'
      });
    }

    ctx.transaction = transaction;
    await next();
  };
}

module.exports = getTransactionById;
