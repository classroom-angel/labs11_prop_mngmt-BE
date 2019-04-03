const router = require('express').Router();
const formData = require('express-form-data');
const { fetchImages, createImages } = require('../../db/dataHelpers/issues');

router.get('', fetchImages);
router.post('', formData.parse(), createImages);

module.exports = router;
