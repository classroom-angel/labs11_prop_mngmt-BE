const { foreignId } = require('../dataHelpers/migrations');
const issuesJoinSolutions = 'issues_join_solutions';

exports.up = knex =>
  knex.schema.createTable(issuesJoinSolutions, table => {
    const issueId = 'issue_id',
      solutionId = 'solution_id';

    table.primary([issueId, solutionId]);

    foreignId(table, issueId, 'issues');
    foreignId(table, solutionId, 'solutions');
  });

exports.down = knex => knex.schema.dropTableIfExists(issuesJoinSolutions);
