const { faker } = require('@faker-js/faker')
const Joi = require("joi");

class UsersService  {
    constructor() {
        this.users = []
        this.generateUser()
    }

    generateUser() {
        const limit = 5
        for (let index = 0; index < limit; index++) {
            this.users.push({
                userId: faker.string.uuid(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.birthdate(),
                registeredAt: faker.date.past(),
            })
        }
    }

    validateUser(data) {
        const userSchema = Joi.object({
            username: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().required(),
            avatar: Joi.string().uri().required(),
            password: Joi.string().min(6).max(30).required(),
            birthdate: Joi.date().required(),
            registeredAt: Joi.date().required(),
        });
    
        const { error, value } = userSchema.validate(data);
        if (error) {
            console.error("Validation error:", error.details);
            throw new Error(error.details[0].message);
        }
        return value;
    }    
       
    async createUser(data) {
        const { error } = this.validateUser(data);
        if (error) {
            throw new Error(error.details[0].message);
        }

        const newUser = {
            id: faker.datatype.uuid(),
            ...data
        };

        this.users.push(newUser);
        return newUser;
    }
    
    async findUser() {
        return this.users
    }

    async findOneUser(id) {
        return this.users.find(item => item.id === id)
    }

    async updateUser(id, changes) {
        const index = this.users.findIndex(item => item.id === id)
        if (index === -1) {
            throw new Error ('User Not Found !')
        }
        const user = this.users[index]
        this.users[index] = {
            ...user,
            ...changes
        }
        return this.users[index]
    }

    async deleteUser(id) {
        const index = this.users.findIndex(item => item.id === id)
        if (index === -1) {
            throw new Error ('User Not Found !')
        }
        this.users.splice(index, 1)
        return { id } 
    }
}

module.exports = UsersService
