'use strict';

const service = require('./service');
const config = require('./config');

service.listen(config.port, config.host, () => {
  console.log('Server listening on %s:%d', config.host, config.port);
});
