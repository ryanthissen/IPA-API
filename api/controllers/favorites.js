'use strict';

const url = require('url');
const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[env];
const knex = require('knex')(config);


module.exports.returnFavorites = function returnFavorites(req, res, next) {
  knex('user_beers')
    .innerJoin('beers', 'user_beers.beer_id', 'beers.id')
    .where('user_id', req.query.user_id)
    .select('user_beers.id', 'rating', 'comment', 'name', 'label_url')
    .then((favorites) => {
      res.set('Content-Type', 'application/json')
      res.status(200).json(favorites);
    })
};

module.exports.addFavorite = function addFavorite(req, res, next) {
  let inputFav = {
    rating: req.body.rating,
    comment: req.body.comment,
    beer_id: req.body.beer_id,
    user_id: req.body.user_id,
  }

  knex('user_beers')
  .insert(inputFav, '*')
  .then((result) => {
    let returnFav = result[0];
    delete returnFav.id;
    delete returnFav.created_at;
    delete returnFav.updated_at;
    res.set('Content-Type', 'application/json')
    res.status(200).json(returnFav);
  })
};

module.exports.deleteFromFavorites = function deleteFromFavorites(req, res, next) {
  let beer;
  knex('user_beers')
  .innerJoin('beers', 'user_beers.beer_id', 'beers.id')
  .select('name', 'user_beers.id')
  .where('user_beers.id', req.query.id)
  .then((result) => {
    beer = result[0];
    console.log(beer);
    return knex('user_beers')
    .del()
    .where('id', req.query.id)
  })
  .then((result) => {
    res.set('Content-Type', 'application/json');
    res.status(200).send(beer);
  });
};
