const db = require('../../dbConfig');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, issueId } = req.body;

    const [tag] = await db('tags')
      .where({ id })
      .update({
        name
      })
      .returning('*');

    if (tag) {
      if (issueId) {
        var [issueJoinTag] = await db('issues_join_tags')
          .where({ tag_id: id })
          .update({
            issue_id: issueId
          })
          .returning('*');
      }

      res.status(200).json({ tag, issueJoinTag });
    } else {
      res.status(400).json({ error: 'Could not update tag in database.' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
