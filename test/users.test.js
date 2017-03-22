'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const bcrypt = require('bcrypt');
const request = require('supertest');
const knex = require('../knex');
const server = require('../app');


suite('User tests', (done) => {
  test('POST /users', (done) => {

    const password = 'LebronSux';
    
    request(server)
      .post('/users')
      .set('Accept', 'application/json')
      .send({
        first_name: 'Steph',
        last_name: 'Curry',
        user_name: 'Threesus',
        email: 'Threesus@gmail.com',
        password,
      })
      .expect(200, {
        id: 2,
        first_name: 'Steph',
        last_name: 'Curry',
        user_name: 'Threesus',
        email: 'Threesus@gmail.com'
      })
      .expect('Content-Type', /json/)
      .end((httpErr, _res) => {
        if (httpErr) {
          return done(httpErr);
        }
        knex('users')
        where('id', 2)
        first()
        then((user) => {
          const hashedPassword = user.hashed_password;

          delete user.hashed_password;
          delete user.created_at;
          delete user.updated_at;

          assert.deepEqual(user, {
            id: 2,
            first_name: 'Steph',
            last_name: 'Curry',
            user_name: 'Threesus',
            email: 'Threesus@gmail'
          });

          // eslint-disable-next-line no-sync
          const isMatch = bcrypt.compareSync(password, hashedPassword);

          assert.isTrue(isMatch, "passwords don't match");
          done();
        });
    });
  });
});
