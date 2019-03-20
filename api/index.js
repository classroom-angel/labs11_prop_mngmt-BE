const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/issues', require('./issues'));

module.exports = router;
