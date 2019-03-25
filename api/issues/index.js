const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted
} = require('../../db/dataHelpers/issues');

router.use('/status', require('./status'));

router.get('', read);

router.post('', create);

router.put('', update);

router.delete('', deleted);

module.exports = router;
