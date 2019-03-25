const router = require('express').Router();
const { read } = require('../../db/dataHelpers/users');

router.use('/register', require('./register'));
router.use('/login', require('./login'));

router.get('', read);

module.exports = router;
