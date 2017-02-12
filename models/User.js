'use strict';

const mongoose = require('mongoose');
const Schema = require('./mongoose').Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  alias: String
});

const User = mongoose.model('User', userSchema);

exports.userSchema = userSchema;
exports.User = User;
 