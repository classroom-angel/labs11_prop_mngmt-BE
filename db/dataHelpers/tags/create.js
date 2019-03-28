const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const create = async (req, res) => {
  try {
    const { name, issueId } = req.body;

    let [tag] = await db('tags')
      .insert({
        name
      })
      .returning('*');

    if (tag) {
      tag = keysToCamelCase(tag);
      if (issueId) {
        var [issueJoinTag] = await db('issues_join_tags')
          .insert({
            issue_id: issueId,
            tag_id: tag.id
          })
          .returning('*');
        issueJoinTag = keysToCamelCase(issueJoinTag);
      }
    } else {
      res.status(400).json({ error: 'You probably did a bad with your data.' });
    }

    res.status(200).json({ tag, issueJoinTag });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = create;
