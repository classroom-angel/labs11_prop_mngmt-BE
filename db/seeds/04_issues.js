const fakeIssues = [];

fakeIssues.push(
  {
    name: 'Karen visit',
    notes: 'Clean up!',
    is_visit: true,
    organization_id: 1
  },
  {
    name: 'Broken desks',
    notes: 'There are so many!',
    organization_id: 2
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('issues', fakeIssues);
