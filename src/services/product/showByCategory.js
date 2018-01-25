const Product = require('./../../models/product')
const Category = require('./../../models/category')
const mongoose = require('mongoose')

module.exports = (req, res) => {
	Category
		.findOne({slug: req.params.slug})
		.then((category) => {
			Product
				.find({
					category: mongoose.Types.ObjectId(category._id),
				})
				.populate('category', 'name')
				.then((products) => {
					return res.render('product/show-by-category', {
						title: 'Produtos',
						layout: 'layouts/main',
						user: req.user || undefined,
						products
					})
				})
				.catch((error) => {
					
				})
		})
		.catch((error) => {
			
		})
} 