const db = require('../../dbConfig');

const create = async (req, res) => {
  try {
    const { content, userId, issueId } = req.body;

    const commentsResponse = await db('comments').insert({
      content,
      user_id: userId,
      issue_id: issueId
    });

    if (commentsResponse) {
      res.status(200).json({ commentsResponse });
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
