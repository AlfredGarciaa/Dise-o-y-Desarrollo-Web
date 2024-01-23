const Joi = require('joi')

const id = Joi.string().uuid()
const username = Joi.string()
const email = Joi.string().email()
const avatar = Joi.string().uri()
const password = Joi.string()
const birthdate = Joi.date()
const registeredAt = Joi.date()
const isBlock = Joi.boolean()

const createUserSchema = Joi.object({
    username: username.required(),
    email: email.required(),
    avatar: avatar.required(),
    password: password.required(),
    birthdate: birthdate.required(),
    registeredAt: registeredAt.required(),
    isBlock: isBlock.required()
})

const updateUserSchema = Joi.object({
    username: username,
    email: email,
    password: password
})

const getUserSchema = Joi.object({
    id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
