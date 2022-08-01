const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

class UserController {

    async registration(req, res, next) {
        try {
            const {email, password, role} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный Email или Пароль'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            //функци хеширования в bcrypt ассинхронная.Хешируем 5 раз 
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, password: hashPassword})
            const basket = await Basket.create({userId: user.id})
            //первым параметром передаем объект(Юзера), второй- секретный ключ, третий- опции(Время жизни токена)
            const jwtToken = jwt.sign(
                {id: user.id, email: user.email, role},
                process.env.SECRET_KEY,
                {expiresIn: '24h'}
            )
            return res.json({jwtToken})
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res) {
        
    }

    async check(req, res, next) {
        const {id} = req.query
        if(!id) {
            return next(ApiError.badRequest('Не задан ID!'))
        }
    }
}

module.exports = new UserController()