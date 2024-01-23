const { faker } = require('@faker-js/faker')
const boom = require('@hapi/boom')

class DoctorsService  {
    constructor() {
        this.doctors = []
        this.generate()
    }

    generate() {
        const limit = 5
        for (let index = 0; index < limit; index++) {
            this.doctors.push({
                doctorId: faker.string.uuid(),
                name: faker.internet.userName(),
                specialization: faker.random.word(),
                email: faker.internet.email(),
                clinicAddress: {
                    street: faker.address.streetAddress(),
                    city: faker.address.city(),
                    state: faker.address.state(),
                    zipCode: faker.address.zipCode(),
                },
                workingHours: {
                    start: faker.datatype.number({ min: 8, max: 12 }) + ':00',
                    end: faker.datatype.number({ min: 13, max: 17 }) + ':00',
                }, 
                //availableDays: faker.random.arrayElements(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']),
                isBlock: faker.datatype.boolean()
            })
        }
    }

    async create(data) {
        const newDoctor = {
            doctorId: faker.datatype.uuid(),
            ...data
        };

        this.doctors.push(newDoctor);
        return newDoctor;
    }
    
    async find() {
        return this.doctors
    }

    async findOne(doctorId) {
        const doctor = this.doctors.find(item => item.doctorId === doctorId)
        if(!doctor) {
            throw boom.notFound('Doctor not found')
        }
        if(doctor.isBlock) {
            throw boom.conflict('Doctor is block')
        }
        return doctor
    }

    findBlockedDoctors() {
        return this.doctors
            .filter(doctor => doctor.isBlock)
            .map(blockedDoctor => ({
                ...blockedDoctor,
                blockReason: faker.lorem.sentence()
            }));
    }

    async update(doctorId, changes) {
        const index = this.doctors.findIndex(item => item.doctorId === doctorId)
        if (index === -1) {
            throw new Error ('Doctor Not Found !')
        }
        const doctor = this.doctors[index]
        this.doctors[index] = {
            ...doctor,
            ...changes
        }
        return this.doctors[index]
    }

    async delete(doctorId) {
        const index = this.doctors.findIndex(item => item.doctorId === doctorId)
        if (index === -1) {
            throw new Error ('Doctor Not Found !')
        }
        this.doctors.splice(index, 1)
        return { doctorId } 
    }
}

module.exports = DoctorsService
