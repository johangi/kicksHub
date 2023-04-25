const Shoe = require('../models/shoeModel');
const mongoose = require('mongoose');

const getShoes = async (req, res) => {
    const shoes = await Shoe.find().sort({ createdAt: -1 });

    res.status(200).json(shoes);
}

const createShoe = async (req, res) => {
    const { title, model, brand, price, articlenumber } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!model) {
        emptyFields.push('model');
    }
    if (!brand) {
        emptyFields.push('brand');
    }
    if (!price) {
        emptyFields.push('price');
    }
    if (!articlenumber) {
        emptyFields.push('articlenumber');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    try {
        const shoe = await Shoe.create({ title, model, brand, price, articlenumber });
        res.status(200).json(shoe);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteShoe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(errorMssg);
    }

    const shoe = await Shoe.findOneAndDelete({ _id: id });

    if (!shoe) {
        return res.status(400).json(errorMssg);
    }

    res.status(200).json(shoe)
}

const updateShoe = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json(errorMssg);
    }

    const { title, model, brand, price, articlenumber } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!model) {
        emptyFields.push('model');
    }
    if (!brand) {
        emptyFields.push('brand');
    }
    if (!price) {
        emptyFields.push('price');
    }
    if (!articlenumber) {
        emptyFields.push('articlenumber');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all fields', emptyFields });
    }

    const updatedShoe = await Shoe.findOneAndUpdate(
        { _id: id },
        { title, model, brand, price, articlenumber },
        { new: true }
    );

    if (!updatedShoe) {
        return res.status(400).json(errorMssg);
    }

    res.status(200).json(updatedShoe);
}

module.exports = {
    getShoes,
    createShoe,
    deleteShoe,
    updateShoe
}