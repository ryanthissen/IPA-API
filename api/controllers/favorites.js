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
      res.set('Content-Type', 'application/json')
      res.status(200).json(favorites);
    })
};

console.log('before post');
module.exports.addFavorite = function addFavorite(req, res, next) {
  console.log('after post');
  // knex()
  let resp = {}
  resp.beer_name = 'Lagunitas',
  resp.label_url = 'url',
  res.set('Content-Type', 'application/json')
  res.status(200).json(resp);
};

module.exports.deleteFromFavorites = function deleteFromFavorites(req, res, next) {
  res.send(200);
};
