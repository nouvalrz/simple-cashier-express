const express = require('express');
const router = express.Router()
const invoiceController = require('../controllers/invoiceController')

router.post('/invoice/create', invoiceController.create)

router.get('/invoice/index', invoiceController.index)

router.get('/invoice/:id', invoiceController.show)

router.put('/invoice/:id/update', invoiceController.update)

router.delete('/invoice/:id/delete', invoiceController.destroy)


module.exports = router;
