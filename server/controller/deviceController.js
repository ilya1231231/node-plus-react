//генерирует неповторяемые ids
const uuid = require('uuid')
const path = require('path')
const {Device, DeviceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class DeviceController {

    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            //генерация названия файла
            let fileName = uuid.v4() + ".jpg"
            //захардкодил.Поменяю в будущем
            const rating = 3
            //перемещаем изображение в папку static
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName, rating})
            if (info) {
                //Если данные приходят с формы, то они приходят вместе с массивом, который нужно спарсить в json
                info = JSON.parse(info)
                info.array.forEach(element => {
                    DeviceInfo.create({
                        title: element.title,
                        description: element.description,
                        deviceId: device.id
                    })
                });
            }
            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest('Произошла ошибка'.e.message))
        }
    }

    async getAll(req, res) {
        //req.query получаем данные из строки запроса
        let {brandId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        //отступ(если перейдут сразу на вторую страницу)
        const startIndex = (page - 1) * limit
        const endIndex = page * limit
        let offset = page * limit - limit
        let devices;
        if (!brandId && !typeId) {
            devices = await Device.findAll()
        }
        if (!brandId && typeId) {
            devices = await Device.findAll({where: {typeId}})
        }
        if (brandId && !typeId) {
            devices = await Device.findAll({where: {brandId}})
        }
        if (brandId && typeId) {
            devices = await Device.findAll({where: {typeId, brandId}})
        }
        //Метод findAll и findAndCountAll странно работают, нельзя подставить limit
        //Идет как подзапрос.Поэтому пока сделал так
        devices = devices.slice(startIndex, endIndex)
        return res.json({'count': devices.length, 'rows': devices})
    }

    async getOne(req, res) {
        //параметр указан в роутере
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'}]
            }
        )
        return res.json(device)
    }
}

module.exports = new DeviceController()