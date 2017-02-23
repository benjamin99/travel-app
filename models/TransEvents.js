'use strict';

const mongoose = require('mongoose');
const _ = require('lodash');
const Schema = require('./mongoose').Schema;
const Transaction = require('./Transaction').Transaction;
const EVENT_COLLECTION = require('./constants').EVENT_COLLECTION;
const USER_COLLECTION = require('./constants').USER_COLLECTION;

const transEventSchema = new Schema({
  creditorId: { 
    type: Schema.Types.ObjectId, 
    ref: USER_COLLECTION,
    requried: true },
  debtorIds: [{
    type: Schema.Types.ObjectId,
    ref: USER_COLLECTION
  }],
  amount: { type: Number, requried: true },
  description: String, 
  created: Date,
  updated: Date
});

/** save hook related */

transEventSchema.pre('save', function(next) {
  const now = new Date();
  this.updated = now;
  if (!this.created) {
    this.created = now;
  
    // create the related trasactions:
    const amount = this.amount / this.debtorIds.length;
    await Transaction.insertMany(_.map(this.debtorIds, (item) => {
      return {
        creditorId: this.creditorId,
        debtorId: item._id,
        transEventId: this._id,
        amount
      };
    }));

  } else {
    // TODO: check if the amount had been updated ...
    const amount = this.amount / this.debtorIds.length;
    await Transaction.update({ transEventId: this._id }, { amount }, { multi: true });
  }

  next();
});

const TransEvent = mongoose.model(EVENT_COLLECTION, transEventSchema);
exports.transEventSchema = transEventSchema;
exports.TransEvent = Event;
