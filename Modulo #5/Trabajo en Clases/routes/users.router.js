const express = require("express")
const UsersService = require('./../services/user.service')

const router = express.Router()
const service = new UsersService()

router.get('/', async (req, res) => {
    const users = await service.findUser()
    res.status(200).json(users)
})

router.get('/filter', async (req, res) => {
    res.send('Yo soy un filtro')
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await service.findOneUser(id);

    if (!user) {
        res.status(404).json({ message: 'User Not Found' });
    } else {
        res.status(200).json(user);
    }
});

router.post('/', async (req, res) => {
    const body = req.body;

    try {
        const newUser = await service.createUser(body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    try {
        const user = await service.updateUser(id, body);
        res.status(206).json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const flag = await service.deleteUser(id);
        res.status(204).json(flag);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
})

module.exports = router
