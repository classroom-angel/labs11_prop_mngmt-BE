const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted
} = require('../../db/dataHelpers/organizations');

router.post('', create);
router.get('', read);
router.put('', update);
router.delete('', deleted);

module.exports = router;
