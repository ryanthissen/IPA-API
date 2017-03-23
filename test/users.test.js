'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const {
  suite,
  test
} = require('mocha');
const bcrypt = require('bcrypt');
const request = require('supertest');
const knex = require('../knex');
const server = require('../app');

suite('User tests', (done) => {
  before((done) => {
    knex.migrate.rollback()
    .then(() => {
      return knex.migrate.latest()

    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  beforeEach((done) => {
    knex.migrate.rollback()
      .then(() => {
        return knex.migrate.latest()
      })
      .then(() => {
        return knex.seed.run()
      })
      .then(() => {
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  test('POST /users', (done) => {
    const password = 'LebronSux';
    request(server)
      .post('/users')
      .set('Accept', 'application/json')
      .send({
        first_name: 'Steph',
        last_name: 'Curry',
        username: 'Threesus',
        email: 'Threesus@gmail.com',
        password,
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        id: 2,
        first_name: 'Steph',
        last_name: 'Curry',
        username: 'Threesus',
        email: 'Threesus@gmail.com',
        token: 'poo',
      }, done);
  });
});
