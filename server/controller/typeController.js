const {Type, DeviceInfo, Device} = require('../models/models')
const ApiError = require('../error/ApiError')
const {validationResult} = require('express-validator');
const {getErrorMsg} = require("../utils/arrayHelper");

class TypeController {
    async create(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(getErrorMsg(errors)))
        }
        const {name} = req.body
        const isSameTypeExists = await Type.findOne({where: {name}});
        if (isSameTypeExists) {
            return next(ApiError.badRequest('Тип с таким названием уже существует'))
        }
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res) {
        const types = await Type.findAll(
            {
                include: [{model: Device, as: 'relatedDevices'}]
            }
        )
        return res.json(types)
    }

    async delete(req, res) {
        const {type} = req.body
        console.log(type)
        await Type.destroy({
            where: {
                id: type.id
            }
        })
        return res.json(type)
    }
}

module.exports = new TypeController()