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
    // if (!('totalResults' in json)) {
    //   res.status(200).send(respBeer);
    // }
    let beerArray = json.data.slice(0, 25);
    let respArray = [];
    beerArray.map((x) => {
      let beerObj = {}
      beerObj.id = x.id;
      beerObj.name = x.name;
      beerObj.abv = x.abv;
      beerObj.ibu = x.ibu;
      if (x.labels === undefined) {
        beerObj.label_url = 'http://png-4.vector.me/files/images/6/6/668633/duff_beer_thumb.png';
      } else {
        beerObj.label_url = x.labels.medium;
      }
      beerObj.description = x.description,
      beerObj.type_name = x.style.shortName,
      respArray.push(beerObj);
    });
    res.status(200).send(respArray);
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
