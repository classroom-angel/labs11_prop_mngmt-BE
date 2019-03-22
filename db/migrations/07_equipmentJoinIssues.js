const equipmentJoinIssues = 'equipmentJoinIssues';

exports.up = knex =>
  knex.schema.createTable(equipmentJoinIssues, table => {
    const equipmentId = 'equipmentId',
      issueId = 'issueId';

    table.primary([equipmentId, issueId]);

    table
      .integer(equipmentId)
      .unsigned()
      .notNullable();
    table
      .foreign(equipmentId)
      .references('id')
      .on('equipment')
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

exports.down = knex => knex.schema.dropTableIfExists(equipmentJoinIssues);
