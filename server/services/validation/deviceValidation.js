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
            body('files', 'fffffffffffff').custom(function(value, filename) {
                console.log(filename)

                var extension = (path.extname(filename)).toLowerCase();
                switch (extension) {
                    case '.jpg':
                        return '.jpg';
                    case '.jpeg':
                        return '.jpeg';
                    case  '.png':
                        return '.png';
                    default:
                        return false;
                }
            })
        ]
    }

}

module.exports = new DeviceValidator();