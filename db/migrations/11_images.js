const { foreignId } = require('../dataHelpers/migrations');
const images = 'images';

exports.up = knex =>
  knex.schema.createTable(images, table => {
    table.increments();
    table.string('path');
    foreignId(table, 'issue_id', 'issues');
  });

exports.down = knex => knex.schema.dropTableIfExists(images);
