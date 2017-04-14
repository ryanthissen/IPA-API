const request = require('supertest');
const app = require('../app.js')
const assert = require('chai').assert;
const {
  suite,
  test
} = require('mocha');
process.env.NODE_ENV = 'test';

describe('Favorites routes', function() {


  describe('POST /beers', function() {

        it('should respond with a status code of 200', function(done) {
          request(app)
            .post('/beers')
            .send({
              bdb_id: "jhjlY34",
              name: "Big Daddy IPA",
              abv: "6.5",
              ibu: "60",
              label_url: "https://s3.amazonaws.com/brewerydbapi/beer/jhjlYL/upload_3RoxtD-medium.png",
              description: "No lightweight, Big Daddy I.P.A tips the scales with a huge hop flavor and a clean, dry finish that leaves the scene without a trace.\r\n\r\nBig Daddy IPA is a hop-head’s delight, a generously dry-hopped yet surprisingly drinkable American-style India Pale Ale. Poured into a standard American pint glass, the beer is a golden straw color, with tight carbonation and a slightly off-white head that leaves a lovely lacing. The aroma is floral, fresh grass, pine needles, grapefruit and subtle notes of fresh bread.",
              type_name: "American IPA",
            })
            .expect(200, done)
        });
        it('should respond with a status code of 400 with incomplete body', function(done) {
          request(app)
            .post('/beers')
            .send({
              name: 'hello',
            })
            .expect(400, done)
        });
        it('should respond with the beer added to the table', function(done) {
          request(app)
            .post('/beers')
            .send({
              bdb_id: "jhjlYL",
              name: "Big Daddy IPA",
              abv: "6.5",
              ibu: "60",
              label_url: "https://s3.amazonaws.com/brewerydbapi/beer/jhjlYL/upload_3RoxtD-medium.png",
              description: "No lightweight, Big Daddy I.P.A tips the scales with a huge hop flavor and a clean, dry finish that leaves the scene without a trace.\r\n\r\nBig Daddy IPA is a hop-head’s delight, a generously dry-hopped yet surprisingly drinkable American-style India Pale Ale. Poured into a standard American pint glass, the beer is a golden straw color, with tight carbonation and a slightly off-white head that leaves a lovely lacing. The aroma is floral, fresh grass, pine needles, grapefruit and subtle notes of fresh bread.",
              type_name: "American IPA",
            })
            .expect(200, {
                id: 7,
                bdb_id: 'jhjlYL',
                name: 'Big Daddy IPA',
                abv: 6.5,
                ibu: 60,
                description: 'No lightweight, Big Daddy I.P.A tips the scales with a huge hop flavor and a clean, dry finish that leaves the scene without a trace.\r\n\r\nBig Daddy IPA is a hop-head’s delight, a generously dry-hopped yet surprisingly drinkable American-style India Pale Ale. Poured into a standard American pint glass, the beer is a golden straw color, with tight carbonation and a slightly off-white head that leaves a lovely lacing. The aroma is floral, fresh grass, pine needles, grapefruit and subtle notes of fresh bread.',
                label_url: 'https://s3.amazonaws.com/brewerydbapi/beer/jhjlYL/upload_3RoxtD-medium.png',
                type_name: 'American IPA',
            }, done);
        });
  });
});
