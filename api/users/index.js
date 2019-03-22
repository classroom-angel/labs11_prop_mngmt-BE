const router = require('express').Router();
const { readUsers } = require('../../db/dataHelpers');

router.use('/register', require('./register'));
router.use('/login', require('./login'));

router.get('', readUsers);

module.exports = router;
