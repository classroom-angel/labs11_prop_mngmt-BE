const { makeDate } = require('../dataHelpers/migrations');
const issues = 'issues';

exports.up = knex =>
  knex.schema.createTable(issues, table => {
    table.increments();
    table.string('date').defaultTo(makeDate().format('MM-DD-YY'));
    table.string('name');
    table.string('notes');
    table.string('status').defaultTo('need attentions');
    table.boolean('is_visit').defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists(issues);
