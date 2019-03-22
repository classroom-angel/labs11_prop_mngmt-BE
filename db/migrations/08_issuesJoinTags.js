const issuesJoinTags = 'issuesJoinTags';

exports.up = knex =>
  knex.schema.createTable(issuesJoinTags, table => {
    const issueId = 'issue_id',
      tagId = 'tag_id';

    table.primary([issueId, tagId]);

    table
      .integer(issueId)
      .unsigned()
      .notNullable();
    table
      .foreign(issueId)
      .references('id')
      .on('issues')
      .onDelete('CASCADE');

    table
      .integer(tagId)
      .unsigned()
      .notNullable();
    table
      .foreign(tagId)
      .references('id')
      .on('equipment')
      .onDelete('CASCADE');
  });

exports.down = knex => knex.schema.dropTableIfExists(issuesJoinTags);
