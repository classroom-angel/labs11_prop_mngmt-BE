const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, organizationId, issueId } = req.body;

    if (name) {
      var [tag] = await db('tags')
        .where({ id })
        .update({
          name,
          organization_id: organizationId
        })
        .returning('*');
      tag = keysToCamelCase(tag);
    }

    if (issueId) {
      var [issueJoinTag] = await db('issues_join_tags')
        .where({ tag_id: id })
        .update({
          issue_id: issueId
        })
        .returning('*');
      issueJoinTag = keysToCamelCase(issueJoinTag);
    }

    res.status(200).json({ tag, issueJoinTag });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = update;
