const router = require('express').Router();
const { read, deleted, update } = require('../../db/dataHelpers/users');

router.use('/register', require('./register'));
router.use('/login', require('./login'));

router.get('', read);
router.delete('/:id', deleted);
router.put('/:id', update);

module.exports = router;
