const router = require('express').Router();
const { createEquipment } = require('../../db/helpers');

router.post('', createEquipment);

module.exports = router;
