const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            //сначала пишется тип токена, потом сам токен. соеденены они через пробел
            const token = req.headers.authorization.split(' ')[1] // Bearer jwttoken
            if (!token) {
                return res.status(401).json({message: 'Не авторизован'})
            }
            //Декодируем jwt
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            //Сравниваем с ролью, которую мы передали в middleware в typeRouter(Например)
            if (decoded.role !== role) {
                res.status(403).json({message: 'Недостаточно прав'})
            }
            req.user = decoded
            next()
        } catch (e) {
            res.status(401).json({message: 'Не авторизован'})
        }
    };
}   