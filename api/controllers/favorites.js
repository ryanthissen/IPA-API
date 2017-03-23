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

module.exports.addFavorite = function addFavorite(req, res, next) {
  // knex('beers')
  // .where('bdb_id', req.body.beer_id)
  // .then((res) => {
  //   if (res.length === 0) {
  //     return knex('beers')
  //     .insert({
  //         bdb_id: req.body.beer_id,
  //         name: req.body.name,
  //         abv: req.body.abv,
  //         ibu: req.body.ibu,
  //         description: req.body.description,
  //         label_url: req.body.label_url,
  //         type_name: req.body.type_name,
  //     }, '*')
  //     .then((res) => {
  //       knex.destroy();
  //     })
  //   }
  // })
  // .then((res) => {
  //   return knex('beers')
  //   .where('bdb_id', req.body.beer_id)
  //   .select('id')
  // })
  // .then((res) => {
  //   let id = res[0];
  //   console.log(id);
  // })
  //
  // let resp = {}
  // // resp.comment =
  // // resp.rating =
  // // resp.beer_name =
  // // resp.label_url =
  // res.set('Content-Type', 'application/json')
  // res.status(200).send(resp)
};

module.exports.deleteFromFavorites = function deleteFromFavorites(req, res, next) {
  res.send(200);
};
