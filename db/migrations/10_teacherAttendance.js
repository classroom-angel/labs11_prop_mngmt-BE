const { foreignId } = require('../dataHelpers/migrations');
const teacherAttendance = 'teacher_attendance';

exports.up = knex =>
  knex.schema.createTable(teacherAttendance, table => {
    const userId = 'id';
    table.primary(userId);
    foreignId(table, userId, 'users');
  });

exports.down = knex => knex.schema.dropTableIfExists(teacherAttendance);
