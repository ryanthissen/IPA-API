exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('favorites').insert({
          id: 1,
          beer_id: 1,
          user_id: 1,
          rating: 5,
          comment: 'this beer drinks pretty good',
          created_at: new Date('2016-06-29 14:26:16 UTC'),
          updated_at: new Date('2016-06-29 14:26:16 UTC')
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));");
    });
};
