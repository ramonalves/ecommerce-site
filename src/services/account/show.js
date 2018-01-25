const Customer = require('./../../models/customer')

module.exports = (req, res) => {
	Customer
		.findOne({
			slug: req.params.slug
		})
		.then((customer) => {
			if (!customer) {
				return res.redirect('/')
			}

			customer = customer.toObject()

			return res.render('account/my-account', {
				title: 'Minha Conta',
				customer: customer,
				layout: 'layouts/main',
				user: req.user || undefined				
			})
		})
		.catch((error) => {
			return ''
		})
}