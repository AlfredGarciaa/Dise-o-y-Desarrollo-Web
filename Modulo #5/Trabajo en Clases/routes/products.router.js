const express = require("express")
const ProductsService = require('./../services/product.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema')

const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res) => {
    const products = await service.find()
    res.status(200).json(products)
})

router.get('/filter', async (req, res) => {
    res.send('Yo soy un filtro')
})

router.get('/:id',
validatorHandler(getProductSchema, 'params'),
async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await service.findOne(id);
        res.status(200).json(product);
    } catch (error) {
        next(error)
    }
});

router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
    try {
        const body = req.body;
        const newProduct = await service.create(body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({
            error: error.message 
        });
    }
});

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),
async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const product = await service.update(id, body);
        res.status(206).json(product);
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
