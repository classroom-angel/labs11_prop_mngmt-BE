const organizations = 'organizations';

exports.up = knex =>
  knex.schema.createTable(organizations, table => {
    table.increments();
    table.string('name').unique();
    table.string('city');
    table.string('country');
    table.integer('expected_hours');
  });

exports.down = knex => knex.schema.dropTableIfExists(users);
