'use strict';

const url = require('url');
const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[env];
const knex = require('knex')(config);


module.exports.addBeer = function addBeer(req, res, next) {

};
