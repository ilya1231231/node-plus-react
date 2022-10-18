const {body} = require("express-validator");

class TypeValidator
{
    create = () => {
        return [
            body('name', 'Поле не должно быть пустым').not().isEmpty(),
            body('name', 'Поле не может состоять полностью из цифр').not().isNumeric(),
        ]
    }
    delete = () => {
        return [
            body('name', 'Неверный формат идентификатора').isNumeric(),
        ]
    }
}

module.exports = new TypeValidator();