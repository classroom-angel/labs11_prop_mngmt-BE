const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted,
  getById
} = require('../../db/dataHelpers/issues');

router.use('/status', require('./status'));

router.post('', create);
router.get('', read);
router.get(':/id', getById);
router.put('/:id', update);
router.delete('/:id', deleted);

module.exports = router;
