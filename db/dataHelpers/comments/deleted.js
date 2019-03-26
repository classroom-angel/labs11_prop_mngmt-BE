const db = require('../../dbConfig');

const deleted = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteResponse = await db('comments')
      .where({ id })
      .del();

    if (deleteResponse) {
      res.status(200).json({ deleteResponse });
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