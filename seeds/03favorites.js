exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_beers').del()
    .then(() => {
      // Inserts seed entries
      return knex('user_beers').insert([{
          beer_id: 1,
          user_id: 1,
          rating: 5,
          comment: 'this beer drinks pretty good',
        },
        {
          beer_id: 2,
          user_id: 1,
          rating: 3,
          comment: 'pretty good.  nice finish.',
        },
        {
          beer_id: 5,
          user_id: 1,
          rating: 5,
          comment: 'love it.  best beer ever!!',
        },
        {
          beer_id: 1,
          user_id: 2,
          rating: 3,
          comment: 'purely adequate',
        },
        {
          beer_id: 4,
          user_id: 2,
          rating: 1,
          comment: 'not good.  did not enjoy',
        },
        {
          beer_id: 2,
          user_id: 3,
          rating: 5,
          comment: 'this beer drinks pretty good',
        },
        {
          beer_id: 4,
          user_id: 3,
          rating: 2,
          comment: 'just ok.  will not have again',
        },
        {
          beer_id: 2,
          user_id: 4,
          rating: 4,
          comment: 'perfect hop character.  love it!',
        },
        {
          beer_id: 4,
          user_id: 2,
          rating: 2,
          comment: 'just ok.  will not have again',
        },
        {
          beer_id: 1,
          user_id: 5,
          rating: 5,
          comment: 'perfect aroma and finsih.  will enjoy again!',
        },
        {
          beer_id: 4,
          user_id: 5,
          rating: 3,
          comment: 'this beer drinks pretty good',
        },
        {
          beer_id: 1,
          user_id: 2,
          rating: 5,
          comment: 'great.  world class.',
        }
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('user_beers_id_seq', (SELECT MAX(id) FROM user_beers));");
    });
};
