const express = require('express');
const router = express.Router();
const OrderController = require('./OrderController');

router.get('/view', OrderController.index);
router.post('/create', OrderController.store);

module.exports = router;