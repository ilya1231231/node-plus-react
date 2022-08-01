const Router = require('express')
const userController = require('../controller/userController')
const router = new Router()

router.post('/registration', userController.registration)
router.post('/login',  userController.login)
// Доступно по url /api/user/auth
router.get('/auth',  userController.check)

module.exports = router