const router = require('express').Router();
const { createEquipment } = require('../../db/dataHelpers');

router.post('', createEquipment);

module.exports = router;
