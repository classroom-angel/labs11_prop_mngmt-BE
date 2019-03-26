const db = require('../../dbConfig');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    const [attendance] = await db('teacher_attendance')
      .where({ id })
      .del()
      .returning('*');

    if (attendance) {
      res.status(200).json({ attendance });
    } else {
      res.status(400).json({
        error: "You are trying to delete something that's not there."
      });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = deleted;
