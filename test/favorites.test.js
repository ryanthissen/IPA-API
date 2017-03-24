const request = require('supertest');
const app = require('../app.js')
const assert = require('chai').assert;
const {
  suite,
  test
} = require('mocha');
const knex = require('../knex');
process.env.NODE_ENV = 'test';

describe('Favorites routes', function() {


  describe('GET /favorites', function() {

    it('should respond with a status code of 200', function(done) {
      request(app)
        .get('/favorites?user_id=1')
        .expect(200, done)
    })
    it('should respond with content type application/json', function(done) {
      request(app)
        .get('/favorites?user_id=1')
        .expect('Content-Type', /json/, done)
    })
    it('should return the beer names and beer label urls from the list of users favorite beers', function(done) {
      request(app)
        .get('/favorites?user_id=1')
        .expect([{
            id: 1,
            rating: 5,
            comment: 'this beer drinks pretty good',
            name: "Stone IPA",
            label_url: "https://s3.amazonaws.com/brewerydbapi/beer/PAM6wX/upload_dl9pJu-medium.png",
          },
          {
            id: 2,
            rating: 3,
            comment: 'pretty good.  nice finish.',
            name: "Total Domination",
            label_url: "https://s3.amazonaws.com/brewerydbapi/beer/infeFI/upload_taTKTO-medium.png",
          },
          {
            id: 3,
            rating: 5,
            comment: 'love it.  best beer ever!!',
            name: "Racer 5 IPA",
            label_url: "https://s3.amazonaws.com/brewerydbapi/beer/o1OELJ/upload_G4iiCw-medium.png",
          },
        ], done)
    })
  })

  describe('POST /favorites', function() {

    it('should respond with a status code of 200', function(done) {
      request(app)
        .post('/favorites')
        .send({
          rating: 4,
          comment: 'This beer was aight',
          user_id: 2,
          beer_id: 2,
        })
        .expect(200, done)
    })

    it('should respond with content type application/json', function(done) {
      request(app)
        .post('/favorites')
        .send()
        .expect('Content-Type', /json/, done)
    })
    it('should respond with a status code of 400 with incomplete body', function(done) {
      request(app)
        .post('/favorites')
        .send({
          user_id: 'hello',
        })
        .expect(400, done)
    })
    it('should return beer name and label url and rating and comment with a proper beer and user id', function(done) {
      request(app)
        .post('/favorites')
        .send({
          rating: 4,
          comment: 'This beer was aight',
          user_id: 2,
          beer_id: 2,
        })
        .expect(200, {
          rating: 4,
          comment: 'This beer was aight',
          user_id: 2,
          beer_id: 2,
        }, done)
    });
  });

  describe('DELETE /favorites', function() {

    it('Should delete a favorite from the route, respond with 200', function(done) {
      request(app)
        .del('/favorites?id=1')
        .expect('Content-Type', /json/)
        .expect(200, {
          "name": "Stone IPA",
          "id": 1,
        }, done)
    });
  });
});
