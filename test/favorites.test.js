const request = require('supertest');
const app = require('../app.js')

describe('Favorites routes', function() {
  describe('GET /favorites', function() {

    it('should respond with a status code of 200', function(done) {
      request(app)
        .get('/favorites?user_id=1')
        .expect(200, done)
    })


  })
})
