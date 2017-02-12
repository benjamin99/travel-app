'use strict';

const mongoose = require('mongoose');
const Schema = require('./mongoose').Schema;

const transactionSchema = new Schema({
  debtorId: { type: Schema.Types.ObjectId, ref: 'User' },
  creditorId: { type: Schema.Types.ObjectId, ref: 'User' },
  description: String,
  created: Date,
  updated: Date
});

const Transaction = mongoose.model('Transaction', transactionSchema);

exports.transactionSchema = transactionSchema;
exports.Transaction = Transaction;
 