const {
  foreignId
} = require('../dataHelpers/migrations');
const {
  makeDate
} = require('../dataHelpers/migrations');
const issues = 'issues';

exports.up = knex =>
  knex.schema.createTable(issues, table => {
    table.increments();
    table.string('date').defaultTo(makeDate().format('MM-DD-YY'));
    table.string('name');
    table.string('notes');
    table.string('status').defaultTo('needs attention');
    table.boolean('is_visit').defaultTo(false);
    foreignId(table, 'organization_id', 'organizations');
    foreignId(table, 'equipment_id', 'equipment')
  });

exports.down = knex => knex.schema.dropTableIfExists(issues);