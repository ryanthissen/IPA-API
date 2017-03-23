
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beers', (table) => {
    table.increments();
    table.string('bdb_id').notNullable().defaultTo('').unique();
    table.string('name').notNullable().defaultTo('');
    table.float('abv').notNullable().defaultTo(5.0);
    table.integer('ibu').notNullable().defaultTo(70);
    table.text('description').notNullable().defaultTo('');
    table.text('label_url').notNullable().defaultTo('');
    table.string('type_name').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beers');
};
