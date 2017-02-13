'use strict';

const _ = require('lodash');
const joi = require('joi');
const bluebird = require('bluebird');
const render = require('../common/render');
const models = require('../../models');
const User = models.User;

const joiValidate = bluebird.promisify(joi.validate);

/** utilities */

function formatUser(user) {
  return {
    id: user._id,
    username: user.username,
    alias: user.alias || user.username
  }
}

/** joi schemas */

const createSchema = joi.object().keys({
  username: joi.string(),
  password: joi.string(),
  alias: joi.string()
}).requiredKeys('username', 'password');

const updateSchema = joi.object().keys({
  password: joi.string(),
  alias: joi.string()
});

/** actions */

async function list() {
  // TODO ...
}

async function show(ctx) {
  const user = ctx.user;
  render(ctx, 200, formatUser(user));
}

async function create(ctx) {
  const form = await joiValidate(ctx.request.body, createSchema);
  const user = new User(form);
  await user.save();
  render(ctx, 201, formatUser(user));
};

async function update() {
  // TODO ...
}

async function destroy() {
  // TODO ...
}

exports.list = list;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;
