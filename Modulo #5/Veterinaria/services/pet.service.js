const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

class PetsService  {
    constructor() {
        this.pets = []
        this.generate()
    }

    generate() {
        const limit = 5
        for (let index = 0; index < limit; index++) {
            this.pets.push({
                petId: faker.string.uuid(),
                petName: faker.animal.dog(), 
                species: faker.animal.type(),
                age: faker.datatype.number({ min: 1, max: 15 }),
                lastVisit: faker.date.past(),  
                isBlock: faker.datatype.boolean()
            })
        }
    }

    async create(data) {
        const newPet = {
            petId: faker.datatype.uuid(),
            ...data
        };

        this.pets.push(newPet);
        return newPet;
    }
    
    async find() {
        return this.pets
    }

    async findOne(petId) {
        const pet = this.pets.find(item => item.petId === petId)
        if(!pet) {
            throw boom.notFound('Pet not found')
        }
        if(pet.isBlock) {
            throw boom.conflict('Pet is block')
        }
        return pet
    }

    findBlockedPets() {
        return this.pets
            .filter(pet => pet.isBlock)
            .map(blockedPet => ({
                ...blockedPet,
                blockReason: faker.lorem.sentence()
            }));
    }

    async update(petId, changes) {
        const index = this.pets.findIndex(item => item.petId === petId)
        if (index === -1) {
            throw new Error ('Pet Not Found !')
        }
        const pet = this.pets[index]
        this.pets[index] = {
            ...pet,
            ...changes
        }
        return this.pets[index]
    }

    async delete(petId) {
        const index = this.pets.findIndex(item => item.petId === petId)
        if (index === -1) {
            throw new Error ('Pet Not Found !')
        }
        this.pets.splice(index, 1)
        return { petId } 
    }
}

module.exports = PetsService
