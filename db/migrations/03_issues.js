const issues = 'issues';

exports.up = knex =>
  knex.schema.createTable(issues, table => {
    table.increments();
    table.string('date');
    table.string('name');
    table.string('notes');
    table.string('status');
    table.boolean('is_visit').defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists(issues);
