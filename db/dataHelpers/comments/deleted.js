const db = require('../../dbConfig');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    const [comment] = await db('comments')
      .where({ id })
      .del()
      .returning('*');

    if (comment) {
      res.status(200).json({ comment });
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
