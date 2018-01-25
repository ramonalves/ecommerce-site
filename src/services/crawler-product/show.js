const request = require('request-promise')
const cheerio = require('cheerio')
const CrawlerProduct = require('./../../models/crawler-product')
const _ = require('lodash')
const Promises = require('bluebird')
const moment = require('moment')

module.exports = async (req, res) => {
	let product = await CrawlerProduct.findById(req.params.id)

	return res.render('crawler-product/show', {
		title: 'Detalhe do Produto',
		layout: 'layouts/main',
		user: req.user || undefined,
		data: product
	})	
	

}