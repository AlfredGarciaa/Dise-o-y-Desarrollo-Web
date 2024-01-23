const Joi = require('joi')

const id = Joi.string().uuid()
const name = Joi.string()
const specialization = Joi.string()
const email = Joi.string().email()
const clinicAddress = Joi.object({
    street: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    zipCode: Joi.string().required(),
})
const workingHours = Joi.object({
    start: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):00$/).required(),
    end: Joi.string().pattern(/^([01]?[0-9]|2[0-3]):00$/).required(),
})
//const availableDays = Joi.array().items(Joi.string().valid('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'))
const isBlock = Joi.boolean()

const createDoctorSchema = Joi.object({
    name: name.required(),
    specialization: specialization.required(),
    email: email.required(),
    clinicAddress: clinicAddress.required(),
    workingHours: workingHours.required(),
    isBlock: isBlock.required()
    //availableDays: availableDays.required()
})

const updateDoctorSchema = Joi.object({
    name: name,
    specialization: specialization,
    workingHours: workingHours
})

const getDoctorSchema = Joi.object({
    id: id.required()
})

module.exports = { createDoctorSchema, updateDoctorSchema, getDoctorSchema }
