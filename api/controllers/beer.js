'use strict';

var util = require('util');


module.exports = {
  getBeers: getBeers
};


function getBeers(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  var name = req.swagger.params.name.value || 'stranger';
  var hello = util.format('Hello, Matt.  This might actually work');

  // this sends back a JSON response which is a single string
  res.json(hello);
}
