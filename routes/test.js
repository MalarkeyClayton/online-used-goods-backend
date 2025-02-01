const express = require('express');
const { getAll, getOne, createOne, updateOne, deleteOne } = require('../controllers/test');

const router = express.Router();

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createOne);
router.put('/:id', updateOne);
router.delete('/:id', deleteOne);

module.exports = router;
