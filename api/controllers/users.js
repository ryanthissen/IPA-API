'use strict';

var url = require('url');

module.exports.createAccount = function createAccount(req, res, next) {
  Default.createAccount(req.swagger.params, res, next);
};
