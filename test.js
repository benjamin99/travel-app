'use strict';

const models = require('./models');

const User = models.User;
const Transaction = models.Transaction;

async function process() {
  const alice = new User({
    username: 'alice',
    password: '123123',
    alias: 'A'
  });

  const bob = new User({
    username: 'bob',
    password: '123123',
    alias: 'b'
  });

  await alice.save();
  await bob.save();

  const now = new Date();

  const transaction = new Transaction({
    debtorId: alice._id,
    creditorId: bob._id,
    description: 'this is the test',
    created: now,
    updated: now
  });

  await transaction.save();
}

process();