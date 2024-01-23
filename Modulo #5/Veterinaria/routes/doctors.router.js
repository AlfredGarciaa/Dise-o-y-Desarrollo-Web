const express = require("express")
const morgan = require("morgan");
const DoctorsService = require('../services/doctor.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createDoctorSchema, updateDoctorSchema, getDoctorSchema } = require('../schemas/doctor.schema');
const passport = require("passport");

const logger = morgan('combined');
const router = express.Router()
const service = new DoctorsService()

router.use(logger);

router.get('/', async (req, res) => {
    const doctors = await service.find()
    res.status(200).json(doctors)
})

router.get('/specials', passport.authenticate('local'), async (req, res) => {
    try {
        const blockedDoctors = service.findBlockedDoctors();
        res.status(200).json(blockedDoctors);
    } catch (error) {
        res.status(500).json({
            error: error.message 
        });
    }
});

router.get('/:id',
validatorHandler(getDoctorSchema, 'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const doctor = await service.findOne(id);
        res.status(200).json(doctor);
    } catch (error) {
        next(error)
    }
});

router.post('/',
validatorHandler(createDoctorSchema, 'body'),
async (req, res) => {
    try {
        const body = req.body;
        const newDoctor = await service.create(body);
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(400).json({
            error: error.message 
        });
    }
});

router.patch('/:id',
validatorHandler(getDoctorSchema, 'params'),
validatorHandler(updateDoctorSchema, 'body'),
async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const doctor = await service.update(id, body);
        res.status(206).json(doctor);
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
