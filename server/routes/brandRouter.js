const Router = require('express')
const router = new Router()
const brandController = require('../controller/brandController')
const checkRole = require("../middleware/checkRoleMiddleware");
const brandValidationRules = require("../services/validation/brandValidation");

router.post('/',  checkRole('ADMIN'), brandValidationRules.create(), brandController.create)
router.post('/delete',  checkRole('ADMIN'), brandController.delete)
router.get('/', brandController.getAll)

module.exports = router