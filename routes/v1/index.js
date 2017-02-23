'use strict';

const Router = require('koa-router');
const users = require('./users');
const transactions = require('./transactions');
const transEvents = require('./transEvents');
const getUserById = require('../middlewares/getUserById');
const getTransEventById = require('../middlewares/getTransEventById');
const getTransactionById = require('../middlewares/getTransactionById');

const router = new Router();

/** users */

router.get('/users', users.list);
router.get('/users/:id',
  getUserById(),
  users.show);
router.post('/users', users.create);
router.put('/users/:id',
  getUserById(),
  users.update);
router.delete('/users/:id',
  getUserById(),
  users.destroy);

/** transaction events */

router.get('/events', transEvents.list);
router.get('/events/:id',
  getTransEventById(),
  transEvents.show);
router.post('/events', transEvents.create);
router.put('/events/:id',
  getTransactionById(),
  transEvents.update);
router.delete('/evets/:id', 
  getTransEventById(),
  transEvents.destroy);

/** transactions */

router.get('/transactions', transactions.list);
router.get('/users/:id/transactions',
  getUserById(),
  transactions.listUser);
router.get('/transactions/:id',
  getTransactionById(),
  transactions.show);
router.post('/transactions', transactions.create);
router.put('/transactions/:id',
  getTransactionById(),
  transactions.update);
router.delete('/transactions/:id',
  getTransactionById(),
  transactions.destroy);

module.exports = router.routes();
