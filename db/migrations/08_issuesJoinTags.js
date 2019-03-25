const { foreignId } = require('../dataHelpers/migrations');
const issuesJoinTags = 'issues_join_tags';

exports.up = knex =>
  knex.schema.createTable(issuesJoinTags, table => {
    const issueId = 'issue_id',
      tagId = 'tag_id';

    table.primary([issueId, tagId]);

    foreignId(table, issueId, 'issues');
    foreignId(table, tagId, 'tags');
  });

exports.down = knex => knex.schema.dropTableIfExists(issuesJoinTags);
