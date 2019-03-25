const { foreignId } = require('../dataHelpers/migrations');
const equipment = 'equipment';

exports.up = knex =>
  knex.schema.createTable(equipment, table => {
    table.increments();
    table.string('name').unique();
    table.string('description');

    // working + damaged = total
    table.integer('working');
    table.integer('damaged');

    foreignId(table, 'organization_id', 'organizations');
  });

exports.down = knex => knex.schema.dropTableIfExists(equipment);
