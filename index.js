require('dotenv').config()


const models = require('./models/models')
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    }
    catch (e) {
        console.log(e)
    }
}

start()
