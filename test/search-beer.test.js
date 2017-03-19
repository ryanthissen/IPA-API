'use strict';

process.env.NODE_ENV = 'test';

const { suite, test } = require('mocha');
const request = require('supertest');
const server = require('../app');

suite('Connection with Brewerydb test', () => {

  test('Searches Brewerydb by a beer by name', (done) => {
  request(server)
    .get('/search?q=Stone_IPA')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200, {
      name: "Stone IPA",
      abv: "6.9",
      ibu: "77",
      label_url: "https://s3.amazonaws.com/brewerydbapi/beer/PAM6wX/upload_dl9pJu-medium.png",
      description: "An \"India Pale Ale\" by definition is highly hopped and high in alcohol - you'll find our Stone India Pale Ale to be true to style with a huge hop aroma, flavor and bitterness throughout. If you're a hop-head like us, then you'll love our Stone India Pale Ale! Medium malt character with a heavy dose of over the top hops! Generous \"dry hopping\" gives this beer its abundant hop aroma and crisp hop flavor",
      type_name: "American IPA",
    }, done);
  });

});
