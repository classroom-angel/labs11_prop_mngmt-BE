const db = require('../../dbConfig');

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const attendance = await db('teacher_attendance')
      .where({ id })
      .first();
    if (attendance) {
      res.status(200).json({ attendance });
    } else {
      res.status(404).json({ error: 'No attendance record was found.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = getById;
