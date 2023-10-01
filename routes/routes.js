const express = require('express');
const router = express.Router()
const invoiceController = require('../controllers/invoiceController')
const authenticationController = require('../controllers/authController')
const authenticationMiddleware = require('../middleware/authenticationMiddleware')

router.post('/login', authenticationController.login)

router.post('/invoice/create', authenticationMiddleware , invoiceController.create)
router.get('/invoice/index', authenticationMiddleware , invoiceController.index)
router.get('/invoice/:id', authenticationMiddleware , invoiceController.show)
router.put('/invoice/:id/update', authenticationMiddleware , invoiceController.update)
router.delete('/invoice/:id/delete', authenticationMiddleware , invoiceController.destroy)


module.exports = router;
