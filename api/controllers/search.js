'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.searchBeer = function searchBeer(req, res, next) {
  Default.searchBeer(req.swagger.params, res, next);
};
