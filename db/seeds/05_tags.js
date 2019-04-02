const fakeTags = [];

fakeTags.push(
  {
    name: 'repair',
    organization_id: 1
  },
  {
    name: 'administrative',
    organization_id: 1
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('tags', fakeTags);
