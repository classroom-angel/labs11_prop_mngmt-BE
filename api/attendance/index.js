const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted,
  getById
} = require('../../db/dataHelpers/attendance');

router.get('', read);
router.get(':/id', getById);
router.post('', create);
router.put('/:id', update);
router.delete('/:id', deleted);

module.exports = router;
