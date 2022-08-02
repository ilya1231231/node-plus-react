const Router = require('express')
const userController = require('../controller/userController')
const router = new Router()
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login',  userController.login)
//middleware проверяет пользователя на авторизованность
router.get('/auth', authMiddleware, userController.check)

module.exports = router