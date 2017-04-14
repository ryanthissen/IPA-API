'use strict';

const url = require('url');
const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[env];
const knex = require('knex')(config);

module.exports.addBeer = function addBeer(req, res, next) {
  let beer = {
    bdb_id: req.body.bdb_id,
    name: req.body.name,
    abv: req.body.abv,
    ibu: req.body.ibu,
    description: req.body.description,
    label_url: req.body.label_url,
    type_name: req.body.type_name,
  }
  knex('beers')
  .insert(beer, '*')
  .then((result) => {
    let returnBeer = result[0];
    delete returnBeer.created_at;
    delete returnBeer.updated_at;
    res.set('Content-Type', 'application/json')
    res.status(200).send(returnBeer)
  })
};
