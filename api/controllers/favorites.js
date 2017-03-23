'use strict';

const url = require('url');
const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[env];
const knex = require('knex')(config);


module.exports.returnFavorites = function returnFavorites(req, res, next) {
  knex('user_beers')
    .innerJoin('beers', 'user_beers.beer_id', 'beers.id')
    .where('user_id', req.query.user_id)
    .select('name', 'label_url')
    .then((favorites) => {
      console.log(favorites);
      res.set('Content-Type', 'application/json')
      res.status(200).json(favorites);
    })
};

module.exports.addFavorite = function addFavorite(req, res, next) {

};

module.exports.deleteFromFavorites = function deleteFromFavorites(req, res, next) {
  Default.deleteFromFavorites(req.swagger.params, res, next);
};
