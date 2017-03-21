
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user_wishlist', (table) => {
    table.increments();
    table.integer('beer_id').notNullable().references('beers.id').onDelete('CASCADE');
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user_wishlist');
};
