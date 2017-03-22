'use strict';

var url = require('url');

module.exports.returnWishlist = function returnWishlist(req, res, next) {
  Default.returnWishlist(req.swagger.params, res, next);
};

module.exports.addToWishlist = function addToWishlist(req, res, next) {
  Default.addToWishlist(req.swagger.params, res, next);
};

module.exports.deleteFromWishlist = function deleteFromWishlist(req, res, next) {
  Default.deleteFromWishlist(req.swagger.params, res, next);
};
