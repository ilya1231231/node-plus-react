const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Basket} = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    //Нужно обернуть в транзакцию
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
            const jwtToken = generateJWT(user.id, email, user.role)
            console.log(jwtToken)
            return res.json({jwtToken})
        } catch (e) {
            console.log(e)
        }
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Пользователя с таким email не существует'))
        }
        //декодируем и сравниваем пароли
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (comparePassword !== true) {
            return next(ApiError.internal('Неправильный пароль'))
        }
        const jwtToken = generateJWT(user.id, user.email, user.role)
        return res.json({jwtToken})
    }

    async check(req, res) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()