const { foreignId } = require('../dataHelpers/migrations');
const equipmentJoinIssues = 'equipment_join_issues';

exports.up = knex =>
  knex.schema.createTable(equipmentJoinIssues, table => {
    const equipmentId = 'equipment_id',
      issueId = 'issue_id';

    table.primary([equipmentId, issueId]);

    foreignId(table, equipmentId, 'equipment');
    foreignId(table, issueId, 'issues');
  });

exports.down = knex => knex.schema.dropTableIfExists(equipmentJoinIssues);
