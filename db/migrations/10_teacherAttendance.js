const teacherAttendance = 'teacher_attendance';

exports.up = knex =>
  knex.schema.createTable(teacherAttendance, table => {
    const userId = 'id';

    table.primary(userId);

    table
      .integer(userId)
      .unsigned()
      .notNullable();
    table
      .foreign(userId)
      .references('id')
      .on('users')
      .onDelete('CASCADE');

    table.integer('last_in');
    table.integer('last_out');
    table.integer('total_minutes_missed');
    table.integer('expected_hours');
  });

exports.down = knex => knex.schema.dropTableIfExists(teacherAttendance);
