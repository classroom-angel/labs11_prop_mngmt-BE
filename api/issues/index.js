const router = require('express').Router();
const { createIssue, readIssues } = require('../../db/dataHelpers');

router.use('/status', require('./status'));

router.get('', readIssues);

router.post('', createIssue);

module.exports = router;
