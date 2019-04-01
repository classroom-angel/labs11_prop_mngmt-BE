const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  const { content, userId, issueId } = req.body;
  try {
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
    if (!content || !userId || !issueId) {
      res
        .status(422)
        .json({ error: 'Required body information: content, userId, issueId' });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = update;
