//генерирует неповторяемые ids
const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError') 

class DeviceController {
    
    async create(req, res) {
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
            console.log(e.message)
        }
    }

    async getAll(req, res) {
        
    }

    async getOne(req, res) {
        
    }
}

module.exports = new DeviceController()