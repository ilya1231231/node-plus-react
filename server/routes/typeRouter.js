const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController')
const typeValidator = require('../services/validation/typeValidation')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeValidator.create(), typeController.create)
router.post('/delete', checkRole('ADMIN'), typeValidator.delete(), typeController.delete)
router.get('/', typeController.getAll)

module.exports = router