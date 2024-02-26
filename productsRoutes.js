const express = require('express');
const Product = require('../models/Product');
const productsRouter = express.Router();
const uuid = require('uuid');

productsRouter.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

productsRouter.get('/:id', async (req, res) => {
    const givenID = req.params.id;
    const searchedProduct = await Product.findById(givenID);
    res.json(searchedProduct);
});

productsRouter.post('/', async (req, res) => {
    const newProduct = req.body;
    await Product.create(newProduct);
    res.send(`product ${newProduct.name} was inserted`);
});

productsRouter.delete('/:id', async (req, res) => {
    const givenID = req.params.id;
    await Product.findByIdAndDelete(givenID);
    res.send(`product with id ${givenID} was deleted`);
});

productsRouter.patch('/:id', async (req, res) => {
    const givenID = req.params.id;
    const updatedProps = req.body;
    await Product.findByIdAndUpdate(givenID, updatedProps)
    res.send(`product with id ${givenID} was updated`);
});

module.exports = productsRouter;