const fakeTeacherAttendance = [];

fakeTeacherAttendance.push({
  id: 1,
  last_in: 0,
  last_out: 0,
  total_minutes_missed: 0
});

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('teacher_attendance', fakeTeacherAttendance);
