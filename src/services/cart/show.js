const Cart = require('./../../models/cart')

module.exports = (req, res) => {
	Cart
		.findById(req.params.id)
		.populate('products.product')
		.populate('customer')
		.then((cart) => {
			if (!cart) {
				return res.redirect('/')
			}

			cart.products.forEach((product) => {
				return product.total_price = product.quantity * product['product'].price
			})

			cart.products.forEach((product) => {
				return cart.total = cart.total + product.total_price
			})

			return res.render('cart/show', {
				title: 'Carrinho',
				layout: 'layouts/main',
				user: req.user || undefined,
				cart
			})
		})
}