const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  try {
    const { content, userId, issueId } = req.body;

    const [comment] = await db('comments')
      .insert({
        content,
        user_id: userId,
        issue_id: issueId
      })
      .returning('*');

    if (comment) {
      comment = keysToCamelCase(comment);
      res.status(200).json({ comment });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
