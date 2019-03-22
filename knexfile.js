require('dotenv').config();

const pg = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: __dirname + '/db/migrations'
  },
  seeds: {
    directory: __dirname + '/db/seeds'
  }
};

module.exports = {
  development: pg,
  production: pg
};
