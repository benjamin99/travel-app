'use strict';

const render = require('../common/render');
const models = require('../../models');
const error = require('../common/error');
const User = models.User;
const ERROR_CODE = error.ERROR_CODE;

function getUserById(options) {
  return async (ctx, next) => {
    const userId = ctx.params.id;
    let user;
    if (userId) {
      try {
        user = await User.findById(userId);
      } catch (error) {
        if (error.name !== 'CastError') {
          throw error;
        }
      }
    }

    if (!user) {
      return render(ctx, 404, {
        error: ERROR_CODE.userNotFound,
        message: 'user not found'
      });
    }

    ctx.user = user;
    await next();
  };
}

module.exports = getUserById;
