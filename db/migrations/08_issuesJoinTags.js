const issuesJoinTags = 'issues_join_tags';

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
      .on('tags')
      .onDelete('CASCADE');
  });

exports.down = knex => knex.schema.dropTableIfExists(issuesJoinTags);
