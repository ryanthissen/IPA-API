'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.specificFavorite = function specificFavorite(req, res, next) {
  Default.specificFavorite(req.swagger.params, res, next);
};
