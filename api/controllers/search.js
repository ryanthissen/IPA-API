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
        };
        beerObj.description = x.description;
        if (x.style === undefined) {
          beerObj.type_name = 'Duff';
        } else {
          beerObj.type_name = x.style.shortName;
        }
        respArray.push(beerObj);
      });
      res.status(200).send(respArray);
    })
    .catch((err) => {
      console.log(err);
    });
};
