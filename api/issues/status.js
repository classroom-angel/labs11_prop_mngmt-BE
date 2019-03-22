const router = require('express').Router();

router.put('/:id', (req, res) => {
  // updates issue status by id
  res.status(200).json({ success: 'PUT not set up yet' });
});

module.exports = router;
