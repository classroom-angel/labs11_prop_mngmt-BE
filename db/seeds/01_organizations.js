const fakeOrganizations = [];

fakeOrganizations.push(
  {
    name: 'Evil Corp',
    city: 'NYC',
    country: 'USA',
    expected_hours: 100
  },
  {
    name: 'Sunshine Corp',
    city: 'Sunnyville',
    country: 'USA',
    expected_hours: 40
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('organizations', fakeOrganizations);
