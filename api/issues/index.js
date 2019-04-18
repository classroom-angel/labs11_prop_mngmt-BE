const router = require('express').Router();
const formData = require('express-form-data');
const {
  create,
  read,
  update,
  deleted,
  readById,
  readImages,
  createImages
} = require('../../db/dataHelpers/issues');

router.post('', create);
router.get('', read);
router.get('/:id', readById);
router.put('/:id', update);
router.delete('/:id', deleted);
router.get('/:id/images', readImages);
router.post('/:id/images', formData.parse(), createImages);

module.exports = router;
