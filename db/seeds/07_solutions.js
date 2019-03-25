const fakeSolutions = [];

fakeSolutions.push({});

const { makeSeed } = require('../dataHelpers/seeds');
exports.seed = makeSeed('solutions', fakeSolutions);
