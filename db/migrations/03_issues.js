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
    table.integer('equipment_id').references('id').on('equipment') //Not sure yet if this should cascade on delete/update
  });

exports.down = knex => knex.schema.dropTableIfExists(issues);