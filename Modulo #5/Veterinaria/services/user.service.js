const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

const PetsService = require('./pet.service');
const petsService = new PetsService();

class UsersService  {
    constructor() {
        this.users = []
        this.generate()
    }

    generate() {
        const limit = 5
        for (let index = 0; index < limit; index++) {
            this.users.push({
                userId: faker.string.uuid(),
                username: faker.internet.userName(),
                email: faker.internet.email(),
                avatar: faker.image.avatar(),
                password: faker.internet.password(),
                birthdate: faker.date.between('1980-01-01', '2002-01-01'),
                registeredAt: faker.date.past(),
                pet: petsService.generate(),
                isBlock: faker.datatype.boolean()
            })
        }
    }

    async create(data) {
        const newUser = {
            userId: faker.datatype.uuid(),
            ...data
        };

        this.users.push(newUser);
        return newUser;
    }
    
    async find() {
        return this.users
    }

    async findOne(userId) {
        const user = this.users.find(item => item.userId === userId)
        if(!user) {
            throw boom.notFound('User not found')
        }
        if(user.isBlock) {
            throw boom.conflict('User is block')
        }
        return user
    }

    findBlockedUsers() {
        return this.users
            .filter(user => user.isBlock)
            .map(blockedUser => ({
                ...blockedUser,
                blockReason: faker.lorem.sentence()
            }));
    }

    async update(userId, changes) {
        const index = this.users.findIndex(item => item.userId === userId)
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

    async delete(userId) {
        const index = this.users.findIndex(item => item.userId === userId)
        if (index === -1) {
            throw new Error ('User Not Found !')
        }
        this.users.splice(index, 1)
        return { userId } 
    }
}

module.exports = UsersService
