'use strict';

var url = require('url');

module.exports.specificFavorite = function specificFavorite(req, res, next) {
  Default.specificFavorite(req.swagger.params, res, next);
};
