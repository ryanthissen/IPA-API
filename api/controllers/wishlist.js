const express = require('express');
const router = express.Router();
const humps = require('humps');
const env = process.env.NODE_ENV || 'development';
const config = require('../knexfile.js')[env];
const knex = require('knex')(config);


//get a users wishlist!
router.get('/wishlist', (req, res) => {

});

//add a beer to a users wishlist
router.post('/wishlist', (req, res) => {

});

//delete a beer from a users wishlist
router.delete('/wishlist', (req, res) => {

});

module.exports = router;
