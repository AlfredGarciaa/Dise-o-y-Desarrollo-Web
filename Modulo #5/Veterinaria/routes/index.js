const express = require("express")

const usersRouter = require('./users.router')
const petsRouter = require('./pets.router')
const doctorsRouter = require('./doctors.router')

function routerAPI (app) {
    const router = express.Router()
    app.use('/api', router)
    router.use('/users', usersRouter)
    router.use('/pets', petsRouter)
    router.use('/doctors', doctorsRouter)
}

module.exports = routerAPI
