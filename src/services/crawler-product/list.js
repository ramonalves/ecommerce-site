const request = require('request-promise')
const cheerio = require('cheerio')
const CrawlerProduct = require('./../../models/crawler-product')
const _ = require('lodash')
const Promises = require('bluebird')
const moment = require('moment')

module.exports = async (req, res) => {

	let $ = undefined
	
	const withOptions = () => ({ 
		method: 'GET', 
		url: 'https://www.submarino.com.br/categoria/celulares-e-smartphones/smartphone',
		transform: function(body) { return $ = cheerio.load(body) }
	})

	let bodyPages = await request(withOptions())
	$ = cheerio.load(bodyPages.html())

	let data = []

	Promises
		let body = await request(withOptions())
		$ = cheerio.load(body.html())

		return Promises			
			.each($('.product-grid-item').get(), async function(element) {
				let row = $(element)
				let name = row.find('.card-product .card-product-url .card-product-details .card-product-name').text().trim().replace(/\r?\n|\r/, ' ')
				let product_id = row.find('.card-product .card-product-url').attr('href').match(/([0-9-]+)/)[0]
				let existsInDB = await CrawlerProduct.findOne({ product_id })
				let price =  row.find('.card-product .card-product-url .card-product-details .card-product-offers .card-product-prices .card-product-price span:last-child').text().trim().replace(/\r?\n|\r/, ' ')

				if (!existsInDB) {
					const toInsert = {
						name  : name,
						price  : parseFloat(price),
						url    : 'https://www.submarino.com.br' + row.find('.card-product .card-product-url').attr('href'),
						description  : name,
						image    : row.find('.card-product .card-product-url .card-product-figure figure .card-product-image picture img').attr('src'),
						product_id
					}
					data.push(toInsert)
				}
			})
		.then(async () => {
			if (data.length) await CrawlerProduct.insertMany(data)

			data = await CrawlerProduct.find({})

			return res.render('crawler-product/list', {
				title: 'Crawler Produtos',
				layout: 'layouts/main',
				user: req.user || undefined,
				data
			})
		})
}