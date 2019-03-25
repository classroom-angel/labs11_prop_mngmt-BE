const fakeIssuesJoinTags = [];

fakeIssuesJoinTags.push(
  {
    issue_id: 1,
    tag_id: 2
  },
  {
    issue_id: 2,
    tag_id: 1
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('issues_join_tags', fakeIssuesJoinTags);
