'use strict';

const _ = require('lodash');
const joi = require('joi');
const models = require('../../models');
const Transaction = models.Transaction;

/** utilities */

function formatTransaction(transaction) {
  return transaction;
}

/** joi schemas */


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

async function create() {
  // TODO ...
};

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
