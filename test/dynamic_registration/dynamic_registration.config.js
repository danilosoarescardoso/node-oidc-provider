'use strict';

const _ = require('lodash');
const cert = require('../default.sig.key');
const config = _.clone(require('../default.config'));

config.features = { registration: true };

module.exports = {
  config,
  certs: [cert],
};
