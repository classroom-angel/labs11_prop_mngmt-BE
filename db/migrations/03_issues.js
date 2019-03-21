const issues = 'issues';

exports.up = knex =>
  knex.schema.createTable(issues, table => {
    table.increments();
    table.string('date');
    table.string('name');
    table.string('notes');
    table.boolean('isVisit');
    table.string('status');
  });

exports.down = knex => knex.schema.dropTableIfExists(issues);
