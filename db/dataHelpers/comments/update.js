const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, userId, issueId } = req.body;

    const [comment] = await db('comments')
      .where({ id })
      .update({
        content,
        user_id: userId,
        issue_id: issueId
      })
      .returning('*');

    if (comment) {
      res.status(200).json({ comment });
    } else {
      res
        .status(400)
        .json({ error: 'Could not update the comment in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
