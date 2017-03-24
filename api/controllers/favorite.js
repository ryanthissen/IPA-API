'use strict';

var url = require('url');
const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[env];
const knex = require('knex')(config);


module.exports.specificFavorite = function specificFavorite(req, res, next) {
  knex('user_beers')
    .innerJoin('beers', 'user_beers.beer_id', 'beers.id')
    .where('user_beers.id', req.query.id)
    .select('user_beers.id', 'name', 'abv', 'ibu', 'label_url', 'rating', 'comment', 'description', 'type_name')
    .then((response) => {
      let favorite = response[0];
      res.set('Content-Type', 'application/json')
      res.status(200).json(favorite);
    })
};
