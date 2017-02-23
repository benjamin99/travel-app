'use strict';

const joi = require('joi');
const bluebird = require('bluebird');
const render = require('../common/render');
const models = require('../../models');
const transEventSchema = models.transEventSchema;
const TransEvent = models.TransEvent;

const joiValidate = bluebird.promisify(joi.validate);

/** utilities */

function formatTransEvent(event) {
  // TODO ...
  return event;
}

/** joi schemas */

const createSchema = joi.object().keys({
  creditorId: joi.string(),
  debtorIds: joi.array().items(joi.string()),
  amount: joi.number(),
  description: joi.string()
}).requiredKeys('creditorId', 'debtorIds', 'amount');

/** actions */

async function list(ctx) {
  // TODO ...
}

async function show(ctx) {
  // TODO ...
}

async function create(ctx) {
  const form = await joiValidate(ctx.request.body, createSchema);
  const transEvent = new TransEvent(form);
  await transEvent.save();
  render(ctx, 201, formatUser(user));
}

async function update(ctx) {
  // TODO ...
}

async function destroy(ctx) {
  // TODO ...
}

exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;
