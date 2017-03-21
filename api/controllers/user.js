'use strict';

var util = require('util');

module.exports = {
  createAccount: createAccount
};


function createAccount(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  let username = req.swagger.params.body.username;
  var hello = `The /users POST route appears to be connected username: fuck`;

  // this sends back a JSON response which is a single string
  res.json(hello);
}
