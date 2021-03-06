const { makeDate, foreignId } = require('../dataHelpers/migrations');
const solutions = 'solutions';

exports.up = knex =>
  knex.schema.createTable(solutions, table => {
    const date = makeDate();
    table.increments();
    table.string('name').notNullable();
    table.string('date').defaultTo(date.format('MM-DD-YY'));
    table.string('time').defaultTo(date.format('LT'));
    foreignId(table, 'organization_id', 'organizations');
  });

exports.down = knex => knex.schema.dropTableIfExists(solutions);
