const reset = table => knex => knex.raw(`TRUNCATE TABLE ${table} CASCADE`);

module.exports = reset;
