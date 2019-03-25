const { foreignId } = require('../dataHelpers/migrations');
const comments = 'comments';

exports.up = knex =>
  knex.schema.createTable(comments, table => {
    table.increments();
    table.string('content').notNullable();
    foreignId(table, 'user_id', 'users'); // commenter
    foreignId(table, 'issue_id', 'issues');
  });

exports.down = knex => knex.schema.dropTableIfExists(comments);
