const tags = 'tags';

exports.up = knex =>
  knex.schema.createTable(tags, table => {
    table.increments();
    table.string('name').notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists(tags);
