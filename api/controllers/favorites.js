const express = require('express');
const router = express.Router();
const humps = require('humps');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[env];
const knex = require('knex')(config);


//get a users favorites!
router.get('/favorites', (req, res) => {

});

//add a beer to a users favorites
router.post('/favorites', (req, res) => {

});

//delete a beer from a users favorites
router.delete('/favorites', (req, res) => {

});

module.exports = router;
