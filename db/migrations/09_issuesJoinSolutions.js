const issuesJoinSolutions = 'issues_join_solutions';

exports.up = knex =>
  knex.schema.createTable(issuesJoinSolutions, table => {
    const issueId = 'issue_id',
      solutionId = 'solution_id';

    table.primary([issueId, solutionId]);

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
      .integer(solutionId)
      .unsigned()
      .notNullable();
    table
      .foreign(solutionId)
      .references('id')
      .on('solutions')
      .onDelete('CASCADE');
  });

exports.down = knex => knex.schema.dropTableIfExists(issuesJoinSolutions);
