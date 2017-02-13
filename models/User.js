'use strict';

const mongoose = require('mongoose');
const Schema = require('./mongoose').Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  alias: String,
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

const User = mongoose.model('User', userSchema);

exports.userSchema = userSchema;
exports.User = User;
 