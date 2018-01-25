const Product = require('./../../models/product')

module.exports = (req, res) => {
	Product
		.find({})
		.populate('category', 'name slug')
		.then((products) => {
			return res.render('product/list', {
				title: 'Produtos',
				layout: 'layouts/main',
				user: req.user || undefined,
				data: products
			})
		})
		.catch((error) => {
			
		})
} 