const express = require('express');

const { getShoes, createShoe } = require('../controllers/shoeController')

const router = express.Router();

router.get('/', getShoes);

router.post('/', createShoe)

module.exports = router;