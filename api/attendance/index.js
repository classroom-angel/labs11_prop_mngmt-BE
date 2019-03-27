const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted,
  readById
} = require('../../db/dataHelpers/attendance');

router.get('', read);
router.get(':/id', readById);
router.post('', create);
router.put('/:id', update);
router.delete('/:id', deleted);

module.exports = router;
