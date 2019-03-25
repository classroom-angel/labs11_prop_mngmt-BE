const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted
} = require('../../db/dataHelpers/comments');

router.post('', create);
router.get('', read);
router.put('/:id', update);
router.delete('/:id', deleted);

module.exports = router;
