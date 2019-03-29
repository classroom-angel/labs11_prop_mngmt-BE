const { joinIssue } = require('../');

module.exports = tag => joinIssue(tag, 'tags', 'tag');
