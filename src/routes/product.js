const express = require('express')
const router = express.Router()

router.get('/', require('./../services/product/list'))
router.get('/:slug', require('./../services/product/show'))
router.get('/categoria/:slug', require('./../services/product/showByCategory'))

module.exports = router