const router = require('express').Router();
const { create, read } = require('../../db/dataHelpers/testimonials');

router.post('', create);
router.get('', read);

module.exports = router;
