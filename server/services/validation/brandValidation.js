const {body} = require("express-validator");

class BrandValidation
{
    create = () => {
        return [
            body('name', 'Поле не должно быть пустым').not().isEmpty(),
            body('name', 'Поле не может состоять полностью из цифр').not().isNumeric(),
        ]
    }
}

module.exports = new BrandValidation();