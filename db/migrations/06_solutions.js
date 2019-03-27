const { makeDate } = require('../dataHelpers/migrations');
const solutions = 'solutions';

exports.up = knex =>
  knex.schema.createTable(solutions, table => {
    const date = makeDate();
    table.increments();
    table.string('name').notNullable();
    table.string('date').defaultTo(date.format('MM_DD_YY'));
    table.string('time').defaultTo(date.format('LT'));
  });

exports.down = knex => knex.schema.dropTableIfExists(solutions);
