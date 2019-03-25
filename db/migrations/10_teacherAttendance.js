const { foreignId } = require('../dataHelpers/migrations');
const teacherAttendance = 'teacher_attendance';

exports.up = knex =>
  knex.schema.createTable(teacherAttendance, table => {
    const userId = 'id';
    table.primary(userId);
    foreignId(table, userId, 'users');

    table.integer('last_in');
    table.integer('last_out');
    table.integer('total_minutes_missed');
    table.integer('expected_hours');
  });

exports.down = knex => knex.schema.dropTableIfExists(teacherAttendance);
