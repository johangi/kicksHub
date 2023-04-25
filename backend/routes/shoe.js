const express = require('express');
const requireAuth = require('../middleware/requireAuth');

const { getShoes, createShoe, deleteShoe, updateShoe } = require('../controllers/shoeController')

const router = express.Router();

router.use(requireAuth);

router.get('/', getShoes);

router.post('/', createShoe);

router.delete('/:id', deleteShoe);

router.put('/:id', updateShoe);

module.exports = router;