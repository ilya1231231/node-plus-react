require('dotenv').config()
// const models = require('./models/models')
const expressValidator = require('express-validator');
const sequelize = require('./db')
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlerMiddleware')
const path = require('path')
const { dirname } = require('path')
const PORT = process.env.PORT || 5000

//регистрация приложений
const app = express()
app.use(cors())
app.use(express.json())
//подгрузил статику.
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
//Подключаем роуты с бэкенда
app.use('/api', router)

//обработка ошибок, последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        // await sequelize.sync({ force: true })
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()