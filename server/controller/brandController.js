const {Brand, Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const {validationResult} = require("express-validator");
const {getErrorMsg} = require("../utils/arrayHelper");

class BrandController {
    async create(req, res, next) {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return next(ApiError.badRequest(getErrorMsg(errors)))
        }
        const {name} = req.body
        const isSameBrandExists = await Brand.findOne({where: {name}});
        if (isSameBrandExists) {
            return next(ApiError.badRequest('Бренд с таким названием уже существует'))
        }
        const brand = await Brand.create({name})
        return res.json(brand)
    }

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    }

    async delete(req, res) {
        const {brand} = req.body
        await Brand.destroy({
            where: {
                id: brand.id
            }
        })
        return res.json(brand)
    }
}

module.exports = new BrandController()