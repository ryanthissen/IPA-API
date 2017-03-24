exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      return knex('users').insert([{
        first_name: "Matt",
        last_name: "Charles",
        username: "BeerMatt",
        email: 'Matt@beer.com',
        hashed_password: 'beer123'
      }, {
        first_name: "Ryan",
        last_name: "Guiness",
        username: "manchester123",
        email: 'ryan@google.com',
        hashed_password: 'beerabv'
      }, {
        first_name: "Josh",
        last_name: "21stAmendment",
        username: "aroundtheworld",
        email: 'josh@hotmail.com',
        hashed_password: 'hopsandbarley'
      }, {
        first_name: "Fred",
        last_name: "Deschutes",
        username: "__fj3000__",
        email: 'fred@snailmail.com',
        hashed_password: 'football'
      }, {
        first_name: "Jeff",
        last_name: "Lagunitas",
        username: "ipa4life",
        email: 'jeff@yahoo.com',
        hashed_password: 'ipa4dayz'
      }]);
    })
};
