const { foreignId } = require('../dataHelpers/migrations');
const tags = 'tags';

exports.up = knex =>
  knex.schema.createTable(tags, table => {
    table.increments();
    table.string('name').notNullable();
    foreignId(table, 'organization_id', 'organizations');
  });

exports.down = knex => knex.schema.dropTableIfExists(tags);
