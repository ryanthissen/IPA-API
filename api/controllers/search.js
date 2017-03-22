'use strict';

var url = require('url');
const key = require('../../apikey');
const fetch = require('node-fetch');

module.exports.searchBeer = function searchBeer(req, res, next) {
  fetch(`http://api.brewerydb.com/v2/search/?key=${key}&q=${req.query.name}&type=beer`)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    if (!('totalResults' in json)) {
      res.status(200).send(respBeer);
    }
    let firstBeer = json.data[0];
    let respBeer = {}
    respBeer.id = firstBeer.id,
    respBeer.name = firstBeer.name,
    respBeer.abv = firstBeer.abv,
    respBeer.ibu = firstBeer.ibu,
    respBeer.label_url = firstBeer.labels.medium,
    respBeer.description = firstBeer.description,
    respBeer.type_name = firstBeer.style.shortName,
    res.status(200).send(respBeer);
  })
  .catch((err) => {
    console.log(err);
  });
  // let beer = {
  //   id: "PAM6wX",
  //   name: "Stone IPA",
  //   abv: "6.9",
  //   ibu: "77",
  //   label_url: "https://s3.amazonaws.com/brewerydbapi/beer/PAM6wX/upload_dl9pJu-medium.png",
  //   description: "An \"India Pale Ale\" by definition is highly hopped and high in alcohol - you'll find our Stone India Pale Ale to be true to style with a huge hop aroma, flavor and bitterness throughout. If you're a hop-head like us, then you'll love our Stone India Pale Ale! Medium malt character with a heavy dose of over the top hops! Generous \"dry hopping\" gives this beer its abundant hop aroma and crisp hop flavor",
  //   type_name: "American IPA",
  // };
  // res.status(200).send(beer);
};
