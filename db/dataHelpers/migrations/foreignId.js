const foreignId = (table, column, name) => {
  table
    .integer(column)
    .unsigned()
    .notNullable();
  table
    .foreign(column)
    .references('id')
    .on(name)
    .onDelete('cascade')
    .onUpdate('cascade');
};

module.exports = foreignId;
