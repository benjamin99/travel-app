'use strict';

const mongoose = require('mongoose');
const Schema = require('./mongoose').Schema;
const USER_COLLECTION = require('./constants').USER_COLLECTION;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  alias: String,
  bankAccount: String,
  created: Date,
  updated: Date
});

userSchema.pre('save', function(next) {
  const now = new Date();
  this.updated = now;
  if (!this.created) {
    this.created = now;
  }

  next();
});

const User = mongoose.model(USER_COLLECTION, userSchema);

exports.userSchema = userSchema;
exports.User = User;
 