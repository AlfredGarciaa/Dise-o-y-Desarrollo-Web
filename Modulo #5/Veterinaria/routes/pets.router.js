const express = require("express")

const morgan = require("morgan");

const PetsService = require('../services/pet.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createPetSchema, updatePetSchema, getPetSchema } = require('../schemas/pet.schema');
const passport = require("passport");

const logger = morgan('combined');

const router = express.Router()
const service = new PetsService()

router.use(logger);

router.get('/', passport.authenticate('local'), async (req, res) => {
    const pets = await service.find();
    res.status(200).json(pets);
});

router.get('/specials', async (req, res) => {
    try {
        const blockedPets = service.findBlockedPets();
        res.status(200).json(blockedPets);
    } catch (error) {
        res.status(500).json({
            error: error.message 
        });
    }
});

router.get('/:id',
validatorHandler(getPetSchema, 'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const pet = await service.findOne(id);
        res.status(200).json(pet);
    } catch (error) {
        next(error)
    }
});

router.post('/',
validatorHandler(createPetSchema, 'body'),
async (req, res) => {
    try {
        const body = req.body;
        const newPet = await service.create(body);
        res.status(201).json(newPet);
    } catch (error) {
        res.status(400).json({
            error: error.message 
        });
    }
});

router.patch('/:id',
validatorHandler(getPetSchema, 'params'),
validatorHandler(updatePetSchema, 'body'),
async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const pet = await service.update(id, body);
        res.status(206).json(pet);
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const answer = await service.delete(id);
        res.status(204).json(answer);
    } catch (error) {
        res.status(404).json({ 
            message: error.message 
        });
    }
})

module.exports = router
