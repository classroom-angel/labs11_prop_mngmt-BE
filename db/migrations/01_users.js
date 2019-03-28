const { foreignId } = require('../dataHelpers/migrations');
const users = 'users';

exports.up = knex =>
  knex.schema.createTable(users, table => {
    table.increments();
    table.string('username').unique();
    table.string('first_name');
    table.string('last_name');
    table.string('role');
    foreignId(table, 'organization_id', 'organizations');
  });

exports.down = knex => knex.schema.dropTableIfExists(users);
