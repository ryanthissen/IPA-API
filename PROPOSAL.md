# Galvanize Q2 Group Project Proposal

* This proposal is for a fullstack app, eventhough you will actually only build the serverside portion of it.
* 1 member from your team will need to fork this repo and update this README file with your proposal.
* Make sure to preview your proposal in a markdown preview and [use valid markdown syntax](https://help.github.com/articles/basic-writing-and-formatting-syntax/)
  * Unformatted/unreadable proposals will be rejected
* Create a Pull Request against this repo with your own repo.

## Team Name

  `Infinity Worldwide, Inc.`

## Group Members

  `Matt Muhr & Ryan Thissen`

## Project/Application Name

  `The IPA API`

## Project Description

  `The IPA API allows users to rank and comment on beers they have already enjoyed, and track down beers they want to enjoy by adding it to their beer wishlist.`

## Who uses it? (from the point of view of end users of your fullstack app)

  `Beer lovers and the beer curious.  Non-logged in users can see all beers on the site with the beer's rank and comments.  Logged in users can mark beers as 'drank', and optionally rate and review them.  Logged in users can also add beers to their 'beer wishlist'.  There are no super users on the site.  A stretch goal would be to have a 'trending' section on the users home page that could show what beers are popular worldwide or in their state/city/neighborhood etc.`

## What outputs do they need? (from the point of view of end users of your fullstack app)

  `1.  a users page that shows which beers they've enjoyed in the past with their respective ranks and/or comments.`

  `2.  a users page that shows their wishlist and allows users to add/remove beers from their wishlist.`

  `3.  a search page where users can search for specific beers by type, region, hop profile, etc.`


## What inputs are needed to generate those outputs? (from the point of view of end users of your fullstack app)

  `1.  users need to be able to input information about beers they've enjoyed or beers they want to add to their wishlist.`

  `2.  users need to be able to search for beers`


## What technologies do you plan to use? (server-side only)
* List libraries/frameworks you plan to use

  `Swagger`
  `Cookie-Parser`  
  `Express`
  `JSONWebtoken`
  `Knex`
  `Bcrypt`
  `Body-Parser`
  `PostgreSQL`
  `Express-Validation`
  `Supertest`

## Feature list (both server side and client side)
* List all features in priority order (including stretch features)

  `Users can search for information about specific beers using the brewerydb api`

  `Users can sign up for the service and then log in for special features`

  `Users can favorite beers they like`

  `Users can view all beers they've favorited`

  `Users users can view detailed information about favorited beers`

  `Users can add comments to beers they really like`

  `Users can add beers to their wishlist`

  `Users can click on a wishlist beer for detailed information about it`

  `Stretch: Users can rank beers`

  `Stretch:  have a 'trending' section to show beers that are extremely popular at the moment, etc.`

  `Stretch:  for 'white whale beers' (pliny the younger, heady topper, etc) that are in users wishlist, provide information about where these beers have been spotted in the wild so users can go track them down immediately`

## End User wireframes. (Client side view of your app, which you won't be implimenting in Q2)
* This is to inform us and you of how someone may use your api to fill a need. This will also drive your user stories for the backend api.
* Include pictures of wireframes that you've drawn or you've made using a program, in this repo.
[a link] (http://imgur.com/a/nWlzu)

## Entity Relationship Diagrams (Server side)
* Include pictures of the diagrams that you've drawn or you've made using a program, in this repo.
  [a link] (http://imgur.com/a/nO9jr)

## User Stories for completing the serverside.
* Use a tracking software like trello or gihub issues.
* Should include all API end points as well details on the input and output to these endpoints

`POST to /users to create account`

`GET to /token to authenticate`

`POST to /token to get authenticating token`

`DELTE to /token to sign out and loose your authentication token`

`GET to /search/:name to search for a beer by a specific name(on the brewerydb api)`

`GET to /favorites to get all favorites of a user`

`GET to /favorites/:beer_name to get detailed info of a specific favorite`

`POST to /favorites to add a beer to your favorites(will initialize with an empty comment)`

`PATCH to /favorites/:beer_name to update your comment on a favorite beer`

`DELETE to /favorites to delete a specific beer`

`GET to /wishlist to get a users wishlist`

`GET to /wishlist/beer_name to get specific information on a beer in your wishlist`

`POST to /wishlist to add a beer to your wishlist`

`DELETE to /wishlist to delete a beer from your wishlist`
