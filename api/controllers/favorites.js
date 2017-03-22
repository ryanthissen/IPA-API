'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.returnFavorites = function returnFavorites(req, res, next) {
  // Default.returnFavorites(req.swagger.params, res, next);
  console.log('worked');
  res.set('Content-Type', 'application/json')
  res.status(200).json([]);
};

module.exports.addFavorite = function addFavorite(req, res, next) {
  Default.addFavorite(req.swagger.params, res, next);
};

module.exports.deleteFromFavorites = function deleteFromFavorites(req, res, next) {
  Default.deleteFromFavorites(req.swagger.params, res, next);
};
