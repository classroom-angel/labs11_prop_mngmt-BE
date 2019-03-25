const fakeIssuesJoinSolutions = [];

fakeIssuesJoinSolutions.push({
  issue_id: 2,
  solution_id: 1
});

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('issues_join_solutions', fakeIssuesJoinSolutions);
