'use strict';

const _ = require('lodash');
const joi = require('joi');
const models = require('../../models');
const User = models.User;

/** utilities */

function formatUser(user) {
  return {
    username: user.username,
    alias: user.alias || user.username
  }
}

/** joi schemas */

const modificationSchema = joi.object().keys({
  username: joi.string(),
  password: joi.string(),
  alias: joi.string()
}).requiredKeys('username', 'password');

/** actions */

async function list() {
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

exports.create = create;
