const Router = require('express')
const router = new Router()

router.post('/registation')
router.post('/login')
// Доступно по url /api/user/auth
router.get('/auth', (req, res) => {
    res.json({message: 'WORKING'})
})

module.exports = router