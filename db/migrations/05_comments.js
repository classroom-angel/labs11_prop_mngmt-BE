const comments = 'comments';

exports.up = knex =>
  knex.schema.createTable(comments, table => {
    const issueId = 'issue_id';
    const userId = 'user_id';
    table.increments();
    table.string('content').notNullable();
    // commenter
    table
      .integer(userId)
      .unsigned()
      .notNullable();
    table
      .foreign(userId)
      .references('id')
      .on('users')
      .onDelete('CASCADE');
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
