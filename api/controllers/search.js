'use strict';

var url = require('url');

module.exports.searchBeer = function searchBeer(req, res, next) {
  Default.searchBeer(req.swagger.params, res, next);
};
