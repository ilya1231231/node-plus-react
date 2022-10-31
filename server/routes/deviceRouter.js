const Router = require('express')
const router = new Router()
const deviceController = require('../controller/deviceController')
const deviceValidationRules = require("../services/validation/deviceValidation");

router.post('/', deviceValidationRules.create(), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router