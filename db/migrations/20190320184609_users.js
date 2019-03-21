const users = 'users';

exports.up = knex =>
  knex.schema.createTable(users, table => {
    const orgId = 'organization_id';
    table.string('username');
    table.string('first_name');
    table.string('last_name');
    table.string('password');
    table.string('role');
    table.integer(orgId).unsigned();
    // table
    //   .foreign(orgId)
    //   .references('id')
    //   .on('organizations');
  });

exports.down = knex => knex.schema.dropTableIfExists(users);
