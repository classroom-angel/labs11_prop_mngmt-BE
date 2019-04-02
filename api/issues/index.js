const router = require('express').Router();
const {
  create,
  read,
  update,
  deleted,
  readById,
  fetchImages
} = require('../../db/dataHelpers/issues');

router.use('/status', require('./status'));

router.post('', create);
router.get('', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', deleted);
router.get('/:id/images', fetchImages);

module.exports = router;
