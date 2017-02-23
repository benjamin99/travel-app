'use strict';

const mongoose = require('mongoose');
const Schema = require('./mongoose').Schema;
const TRANSACTION_COLLECTION = require('./constants').TRANSACTION_COLLECTION;
const EVENT_COLLECTION = require('./constants').EVENT_COLLECTION;
const USER_COLLECTION = require('./constants').USER_COLLECTION;

const transactionSchema = new Schema({
  creditorId: { 
    type: Schema.Types.ObjectId, 
    ref: USER_COLLECTION, 
    required: true },
  debtorId: { 
    type: Schema.Types.ObjectId, 
    ref: USER_COLLECTION,
    required: true },
  transEventId: {
    type: Schema.Types.ObjectId,
    ref: EVENT_COLLECTION,
    required: true },
  amount: { type: Number, required: true },
  resolved: { type: Boolean, default: false },
  created: Date,
  updated: Date
});

transactionSchema.pre('save', function(next) {
  const now = new Date();
  this.updated = now;
  if (!this.created) {
    this.created = now;
  }

  next();
})

const Transaction = mongoose.model(TRANSACTION_COLLECTION, transactionSchema);
exports.transactionSchema = transactionSchema;
exports.Transaction = Transaction;
 