const Joi = require('joi')

const id = Joi.string().uuid()
const petName = Joi.string()
const species = Joi.string()
const age = Joi.number().integer().min(1).max(15)
const lastVisit = Joi.date()
const isBlock = Joi.boolean()

const createPetSchema = Joi.object({
    petName: petName.required(),
    species: species.required(),
    age: age.required(),
    lastVisit: lastVisit.required(),
    isBlock: isBlock.required()
})

const updatePetSchema = Joi.object({
    petName: petName,
    age: age,
    lastVisit: lastVisit
})

const getPetSchema = Joi.object({
    id: id.required()
})

module.exports = { createPetSchema, updatePetSchema, getPetSchema }
