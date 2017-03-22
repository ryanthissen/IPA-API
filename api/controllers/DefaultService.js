'use strict';

exports.addFavorite = function(args, res, next) {
  /**
   * Adds a new beer to a clients list of favorites
   *
   * user AddFavoriteRequest information on new favorite beer
   * returns AddFavoriteResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "type_name" : "aeiou",
  "abv" : "aeiou",
  "description" : "aeiou",
  "id" : "aeiou",
  "ibu" : "aeiou",
  "beer_name" : "aeiou",
  "label_url" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.addToWishlist = function(args, res, next) {
  /**
   * Adds a new beer to a client's wishlist
   *
   * beer_id String the beer client wants to add to wishlist
   * returns AddToWishlistResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "type_name" : "aeiou",
  "abv" : "aeiou",
  "description" : "aeiou",
  "id" : "aeiou",
  "ibu" : "aeiou",
  "beer_name" : "aeiou",
  "label_url" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.createAccount = function(args, res, next) {
  /**
   * Creates new account
   *
   * user CreateUser user to add to the database
   * returns CreateUserSuccess
   **/
  var examples = {};
  examples['application/json'] = {
  "message" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteFromFavorites = function(args, res, next) {
  /**
   * delete a beer from list of favorites
   *
   * id String beer id
   * returns DeleteFavoriteBeer
   **/
  var examples = {};
  examples['application/json'] = {
  "beer_name" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.deleteFromWishlist = function(args, res, next) {
  /**
   * delete a beer from client's wishlist
   *
   * beer_id String beer id
   * returns DeleteWishlistBeer
   **/
  var examples = {};
  examples['application/json'] = {
  "beer_id" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.returnFavorites = function(args, res, next) {
  /**
   * Returns a list favorites of a client
   *
   * user_id String the favorite beers of the client
   * returns FavoritesResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "beers" : [ {
    "name" : "aeiou",
    "label_url" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.returnWishlist = function(args, res, next) {
  /**
   * Returns all elements on a client's wishlist
   *
   * user_id String the wishlist beers of the client
   * returns WishlistResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "beers" : [ {
    "name" : "aeiou",
    "label_url" : "aeiou"
  } ]
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.searchBeer = function(args, res, next) {
  /**
   * Returns a specific beer from brewerydb
   *
   * name String The name of the beer that was searched
   * returns SearchBeer
   **/
  var examples = {};
  examples['application/json'] = {
  "type_name" : "aeiou",
  "abv" : "aeiou",
  "description" : "aeiou",
  "id" : "aeiou",
  "ibu" : "aeiou",
  "beer_name" : "aeiou",
  "label_url" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.specificFavorite = function(args, res, next) {
  /**
   * returns more detailed information about a specific favorite beer
   *
   * name String detailed information on this specific beer
   * returns SpecificFavoriteBeer
   **/
  var examples = {};
  examples['application/json'] = {
  "type_name" : "aeiou",
  "abv" : "aeiou",
  "description" : "aeiou",
  "id" : "aeiou",
  "ibu" : "aeiou",
  "beer_name" : "aeiou",
  "label_url" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

