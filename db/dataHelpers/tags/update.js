const db = require('../../dbConfig');
const { keysToCamelCase } = require('../');

const update = async (req, res) => {
  const { name, organizationId, issueId } = req.body;
  try {
    const { id } = req.params;

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
    if (!name || !organizationId || !issueId) {
      res.status(422).json({
        error: 'Required body information: name, organizationId, issueId'
      });
    } else {
      res.status(500).json({ error });
    }
  }
};

module.exports = update;
