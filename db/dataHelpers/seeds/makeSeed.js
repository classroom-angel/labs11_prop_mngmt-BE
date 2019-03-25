const makeSeed = (table, fakeData) => knex => knex(table).insert(fakeData);

module.exports = makeSeed;
