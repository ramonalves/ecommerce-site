const mongoose = require('mongoose')

const CrawlerProduct = new mongoose.Schema({
	name: {
		type: String,
        required: true,
        trim: true
	},
	description: {
		type: String,
        default: '',
        trim: true
	},
	image: {
        type: String,
        trim: true
	},
	product_id: {
		type: mongoose.SchemaTypes.Mixed
	},
	price: {
		type: Number,
		required: true,
		default: 0
	},
	url: {
        type: String,
        trim: true
	},
	created: {
		type: Date,
		required: true,
		default: new Date()
	}
})

module.exports = mongoose.model('CrawlerProduct', CrawlerProduct)