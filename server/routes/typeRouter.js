const Router = require('express')
const router = new Router()
const typeController = require('../controller/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), typeController.validate('createType'), typeController.create)
router.post('/delete', checkRole('ADMIN'), typeController.delete)
router.get('/', typeController.getAll)

module.exports = router