const fakeComments = [];

fakeComments.push(
  {
    content: "Karen's going to visit! What do we do?!",
    issue_id: 1,
    user_id: 1
  },
  {
    content: "It'll be okay.",
    issue_id: 1,
    user_id: 2
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('comments', fakeComments);
