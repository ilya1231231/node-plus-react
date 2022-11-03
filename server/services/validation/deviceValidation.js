const {body} = require("express-validator");
const expressValidator = require("express-validator");
const path = require("path");

class DeviceValidator
{
    create = () => {
        return [
            body('brandId', 'Поле "Бренд" не должно быть пустым').not().isEmpty(),
            body('price', 'Поле "Цена" не должно быть пустым').not().isEmpty(),
            body('info', 'Поле "Характеристики" не должно быть пустым').not().isEmpty(),
            body('name', 'Поле "Название" не должно быть пустым').not().isEmpty(),
            body('typeId', 'Поле "Тип" не должно быть пустым').not().isEmpty(),
        ]
    }

}

module.exports = new DeviceValidator();