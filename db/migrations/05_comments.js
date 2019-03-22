const comments = 'comments';

exports.up = knex =>
  knex.schema.createTable(comments, table => {
    const issueId = 'issue_id';
    table.increments();
    table.string('content').notNullable();
    table
      .integer(issueId)
      .unsigned()
      .notNullable();
    table
      .foreign(issueId)
      .references('id')
      .on('issues')
      .onDelete('CASCADE');
  });

exports.down = knex => knex.schema.dropTableIfExists(comments);
