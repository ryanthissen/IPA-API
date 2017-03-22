'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.createAccount = function createAccount(req, res, next) {
  Default.createAccount(req.swagger.params, res, next);
};
