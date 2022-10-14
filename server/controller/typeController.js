const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const {body, validationResult} = require('express-validator');

class TypeController {
    async create(req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const {name} = req.body
        if (!name) {
            return next(ApiError.badRequest())
        }
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll()
        return res.json(types)
    }

    async delete(req, res) {
        const {type} = req.body
        await Type.destroy({where: {
            id: type.id
        }})
        return res.json(type)    
    }

    validate = (method) => {
        switch (method) {
            case 'createType': {
                return [
                    body('name', 'Неверное значение названия типа').isAlpha(),
                ]
            }
        }
    }
}

module.exports = new TypeController()