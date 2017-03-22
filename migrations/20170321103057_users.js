
exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('first_name').notNullable().defaultTo('');
    table.string('last_name').notNullable().defaultTo('');
    table.string('email').notNullable().unique();
    table.string('username').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
