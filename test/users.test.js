'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const bcrypt = require('bcrypt');
const request = require('supertest');
// const knex = require('../knex');
const server = require('../server');


suite('User tests', (done) => {
  test('POST /users', (done) => {
    request(server)
      .post('/users')
      .set('Accept', 'application/json')
      .send({
        firstName: 'Steph',
        lastName: 'Curry',
        email: 'Threesus@gmail.com',
        password: 'LebronSux'
      })
      .expect(200, {
        id: 3,
        firstName: 'Steph',
        lastName: 'Curry',
        email: 'Threesus@gmail.com'
      })
      .expect('Content-Type', /json/)
      .end((httpErr, _res) => {
        if (httpErr) {
          return done(httpErr);
        }
        done
      });


      //add to database here

  });
})
