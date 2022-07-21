require('dotenv').config()
const models = require('./models/models')
const sequelize = require('./db')
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlerMiddleware')

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
//Подключаем роуты с бэкенда
app.use('/api', router)

//обработка ошибок, последний middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ force: true })
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch(e) {
        console.log(e)
    }
}

start()