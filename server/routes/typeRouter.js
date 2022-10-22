const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController')
const typeValidationRules = require('../services/validation/typeValidation')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeValidationRules.create(), typeController.create)
router.post('/delete', checkRole('ADMIN'), typeValidationRules.delete(), typeController.delete)
router.get('/', typeController.getAll)

module.exports = router