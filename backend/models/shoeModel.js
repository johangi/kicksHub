const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    articlenumber: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Shoe', shoeSchema);