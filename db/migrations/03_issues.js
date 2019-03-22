const issues = 'issues';

exports.up = knex =>
  knex.schema.createTable(issues, table => {
    const date = new Date();
    table.increments();
    table.string('date').defaultTo(date.format('m-d-Y'));
    table.string('name');
    table.string('notes');
    table.string('status').defaultTo('need attentions');
    table.boolean('is_visit').defaultTo(false);
  });

exports.down = knex => knex.schema.dropTableIfExists(issues);
