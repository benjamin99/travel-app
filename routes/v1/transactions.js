'use strict';

const joi = require('joi');
const bluebird = require('bluebird');
const render = require('../common/render');
const models = require('../../models');
const Transaction = models.Transaction;

const joiValidate = bluebird.promisify(joi.validate);

/** utilities */

function formatTransaction(transaction) {
  return transaction;
}

async function createTransaction(form) {
  const transaction = new Transaction(form);
  await transaction.save();
  return transaction;
}

/** joi schemas */

const createSchema = joi.object().keys({
  debtorId: joi.string(),
  creditorId: joi.string(),
  description: joi.string(),
  amount: joi.number().positive()
}).requiredKeys('debtorId', 'creditorId', 'description', 'amount');

const bulkCreateSchema = joi.object().keys({
  debtors: joi.array().items(joi.string()),
  creditors: joi.array().items(joi.string()),
  description: joi.string(),
  amount: joi.number().positive()
});

/** actions */

async function list() {
  // TODO ...
}

async function listUser() {
  // TODO ...
}

async function show() {
  // TODO ... 
}

async function create(ctx) {
  const form = await joiValidate(ctx.request.body, createSchema);
  const transaction = await createTransaction(form);
  render(ctx, 201, formatTransaction(transaction));
};

async function bulkCreate() {
  // TODO ...
}

async function update() {
  // TODO ...
}

async function destroy() {
  // TODO ...
}

exports.list = list;
exports.listUser = listUser;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;
