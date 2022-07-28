//генерирует неповторяемые ids
const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError') 

class DeviceController {
    
    async create(req, res, next) {
        try {
            const {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            //генерация названия файла
            let fileName = uuid.v4() + ".jpg"
            const rating = 3
            //перемещаем изображение в папку static
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName, rating})
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest('Произошла ошибка' . e.message))
        }
    }

    async getAll(req, res) {
        //req.query получаем данные из строки запроса
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        //отступ(если перейдут сразу на вторую страницу)
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAll({limit: {limit}}, offset)
        }
        if (!brandId && typeId) {
            devices = await Device.findAll({where: {typeId}, limit, offset})
        }
        if (brandId && !typeId) {
            devices = await Device.findAll({where: {brandId}, limit, offset})
        }
        if (brandId && typeId) {
            devices = await Device.findAll({where: {typeId, brandId}, limit, offset})
        }
        return res.json(devices)
    }

    async getOne(req, res) {
        
    }
}

module.exports = new DeviceController()