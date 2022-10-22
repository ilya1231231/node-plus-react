const {body} = require("express-validator");

class AuthValidator
{
    loginOrRegister = () => {
        return [
            body('email', 'Поле должно быть корректным email').not().isEmpty(),
            body('password', 'Пароль не может быть пустым').not().isEmpty(),
        ]
    }
}

module.exports = new AuthValidator();