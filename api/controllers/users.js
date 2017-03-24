'use strict';
const env = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[env];
const knex = require('knex')(config);
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');
const url = require('url');
const humps = require('humps');

// var Default = require('./DefaultService');
module.exports.createAccount = function createAccount(req, res, next) {
  // if (req.body.email === undefined) {
  //   res.set('Content-Type', 'text/plain');
  //   res.status(400).send('Email must not be blank');
  // } else if (req.body.password === undefined) {
  //   res.set('Content-Type', 'text/plain');
  //   res.status(400).send('Password must be at least 8 characters long');
  // } else if (req.body.username === undefined) {
  //   res.set('Content-Type', 'text/plain');
  //   res.status(400).send('Must provide a username');
  // } else {
  bcrypt.hash(req.body.password, 12)
    .then((hashed_password) => {
      return knex('users').insert({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        email: req.body.email,
        hashed_password: hashed_password,
      }, '*');
    })
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      delete user.created_at;
      delete user.updated_at;
      // const claim = { userId: users[0].id };
      // const token = jwt.sign(claim, process.env.JWT_KEY, {
      //   expiresIn: '7 days',
      // });
      // user.token = 'dunks';
      res.status(200).send(user);
    })
    .catch((err) => {
      // res.set('Content-Type', 'text/plain');
      res.status(400).send('Email already exists');
    });
  // }
};
