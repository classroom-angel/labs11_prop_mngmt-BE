const fakeTags = [];

fakeTags.push(
  {
    name: 'repair'
  },
  {
    name: 'administrative'
  }
);

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('tags', fakeTags);
