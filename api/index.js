const router = require('express').Router();

router.use('/organizations', require('./organizations'));
router.use('/users', require('./users'));
router.use('/equipment', require('./equipment'));
router.use('/issues', require('./issues'));

module.exports = router;