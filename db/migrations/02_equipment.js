const equipment = 'equipment';

exports.up = knex =>
  knex.schema.createTable(equipment, table => {
    const orgId = 'organization_id';
    table.increments();
    table.string('name').unique();
    table.string('description');
    // working + damaged = total
    table.integer('working');
    table.integer('damaged');
    table.integer(orgId).unsigned();
    table
      .foreign(orgId)
      .references('id')
      .on('organizations');
  });

exports.down = knex => knex.schema.dropTableIfExists(equipment);
