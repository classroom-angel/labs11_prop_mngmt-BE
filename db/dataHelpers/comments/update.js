const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  try {
    const { content, userId, issueId } = req.body;
    const { id } = req.params;

    let [comment] = await db('comments')
      .where({ id })
      .update({
        content,
        user_id: userId,
        issue_id: issueId
      })
      .returning('*');

    if (comment) {
      comment = keysToCamelCase(comment);
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
