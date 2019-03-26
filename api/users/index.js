const router = require('express').Router();
const {
  read,
  deleted,
  update,
  getById
} = require('../../db/dataHelpers/users');

router.use('/register', require('./register'));
router.use('/login', require('./login'));

router.get('', read);
router.get('/:id', getById);
router.delete('/:id', deleted);
router.put('/:id', update);

module.exports = router;
