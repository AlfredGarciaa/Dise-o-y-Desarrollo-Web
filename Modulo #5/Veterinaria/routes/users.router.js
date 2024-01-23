const express = require("express")
const morgan = require("morgan");
const passport = require("passport");
const UsersService = require('../services/user.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema')

const logger = morgan('combined');
const router = express.Router()
const service = new UsersService()

router.use(logger);

router.get('/', passport.authenticate(), async (req, res) => {
    const users = await service.find()
    res.status(200).json(users)
})

router.get('/specials', async (req, res) => {
    try {
        const blockedUsers = service.findBlockedUsers();
        res.status(200).json(blockedUsers);
    } catch (error) {
        res.status(500).json({
            error: error.message 
        });
    }
});

router.get('/:id',
validatorHandler(getUserSchema, 'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await service.findOne(id);
        res.status(200).json(user);
    } catch (error) {
        next(error)
    }
});

router.post('/',
validatorHandler(createUserSchema, 'body'),
async (req, res) => {
    try {
        const body = req.body;
        const newUser = await service.create(body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({
            error: error.message 
        });
    }
});

router.patch('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(updateUserSchema, 'body'),
async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const user = await service.update(id, body);
        res.status(206).json(user);
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
