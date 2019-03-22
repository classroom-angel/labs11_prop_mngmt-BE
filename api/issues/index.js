const router = require('express').Router();
const { createIssue } = require('../../db/helpers');

router.use('/status', require('./status'));

router.get('', (req, res) => {
  // gets issues
  res.status(200).json({ success: 'GET not set up yet' });
});

router.post('', createIssue);

module.exports = router;
