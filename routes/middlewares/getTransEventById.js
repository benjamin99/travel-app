'use strict';

const render = require('../common/render');
const models = require('../../models');
const error = require('../common/error');
const TransEvent = models.TransEvent;
const ERROR_CODE = error.ERROR_CODE;

function getTransEventById(options) {
  return async (ctx, next) => {
    const eventId = ctx.params.id;
    let event;
    if (eventId) {
      try {
        event = await TransEvent.findById(eventId);
      } catch (error) {
        if (error.name !== 'CastError') {
          throw error;
        }
      }
    }

    if (!event) {
      return render(ctx, 404, {
        error: ERROR_CODE.eventNotFound,
        message: 'event not found'
      });
    }

    ctx.transEvent = event;
    await next();
  };
}

module.exports = getTransEventById;