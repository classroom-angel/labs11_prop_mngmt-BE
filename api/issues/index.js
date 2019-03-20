const router = require('express').Router();

router.use('/status', require('./status'));

router.get('', (req, res) => {
  // gets issues
  res.status(200).json({ success: 'GET not set up yet' });
});

module.exports = router;
