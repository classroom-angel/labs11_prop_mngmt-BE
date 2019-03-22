const solutions = 'solutions';

exports.up = knex =>
  knex.schema.createTable(solutions, table => {
    const date = new Date();
    table.increments();
    table.string('date').defaultTo(date.format('m-d-Y'));
    table.string('time').defaultTo(date.format('h:i'));
  });

exports.down = knex => knex.schema.dropTableIfExists(solutions);
