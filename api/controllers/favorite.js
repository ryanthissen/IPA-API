const express = require('express');
const router = express.Router();
const humps = require('humps');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[env];
const knex = require('knex')(config);


//gets a specific favorite specified in the query params
router.get('/favorite', (req, res) => {

});

module.exports = router;
