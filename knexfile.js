'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/beer_database_dev',
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/beer_database_test',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
