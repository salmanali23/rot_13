const express = require('express')
const router = express.Router()
const { RotationController } = require('../controllers');

router.post('/string_rotation', RotationController.convert)

module.exports = router