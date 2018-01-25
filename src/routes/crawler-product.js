const express = require('express')
const router = express.Router()

router.get('/', require('./../services/crawler-product/list'))
router.get('/:id', require('./../services/crawler-product/show'))


module.exports = router