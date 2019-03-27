const router = require('express').Router();
const {
  read,
  deleted,
  update,
  readById
} = require('../../db/dataHelpers/users');

router.use('/register', require('./register'));
router.use('/login', require('./login'));

router.get('', read);
router.get('/:id', readById);
router.delete('/:id', deleted);
router.put('/:id', update);

module.exports = router;
