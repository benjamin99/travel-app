'use strict';

const _ = require('lodash');

const env = process.env.NODE_ENV || 'development';
const config = {
  port: +process.env.SERVER_PORT || 3000,
  host: process.env.SERVER_HOST || 'localhost',
  timezone: process.env.SERVER_TIMEZONE || 'UTC',
  logLevel: process.env.LOG_LEVEL || (env === 'development' ? 'trace' : 'warn'),
  mongodb: process.env.MONGODB
};

console.log(`load config: ${env}`);

try {
  _.merge(config, require(`./${env}`));
} catch (error) {
  console.log(`failed to load config: ${env}`);
}

module.exports = config;
