const request = require('supertest');
const app = require('../app.js')
const assert = require('chai').assert;
const {
  suite,
  test
} = require('mocha');

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
          name: "Stone IPA",
          label_url: "https://s3.amazonaws.com/brewerydbapi/beer/PAM6wX/upload_dl9pJu-medium.png",
        }], done)
    })
  })

  describe('POST /favorites', function() {

    it('should respond with a status code of 200', function(done) {
      request(app)
        .post('/favorites')
        .send({
          rating: '4',
          comment: 'This beer was aight',
          user_id: 'hello',
          beer_id: 'boo',
        })
        .expect(200, done)
    })
    it('should respond with content type application/json', function(done) {
      request(app)
        .post('/favorites')
        .send({
          rating: '4',
          comment: 'This beer was aight',
          user_id: 'hello',
          beer_id: 'boo',
        })
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
    it('should return beer name and label url with a proper beer and user id', function(done) {
      request(app)
        .post('/favorites')
        .send({
          rating: '4',
          comment: 'This beer was aight',
          user_id: '1',
          beer_id: '1',
        })
        .expect(200, {
          name: "Stone IPA",
          label_url: "https://s3.amazonaws.com/brewerydbapi/beer/PAM6wX/upload_dl9pJu-medium.png",
        },done)
    })

  })
})
