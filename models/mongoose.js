'use strict';

const bluebird = require('bluebird');
const _mongoose = require('mongoose');
const config = require('../config');

const MONGOOSE_URL = config.mongodb.url;
_mongoose.connect(MONGOOSE_URL);
_mongoose.Promise = bluebird;

const database = _mongoose.connection;

database.on('error', console.error.bind(console, 'mongoose connection error:'));
database.once('open', () => {
  console.log(`connected to the database: ${MONGOOSE_URL}`);
});

exports.mongoose = _mongoose;
exports.Schema = _mongoose.Schema;
