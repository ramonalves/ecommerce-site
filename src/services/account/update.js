const Customer = require('./../../models/customer')
const slugfy = require('./../../helpers/slugfy')

module.exports = (req, res) => {
	let slug = slugfy(req.body.name)

	let data = {
		name: req.body.name,
		email: req.body.email,
		slug: slug,
		cpf: req.body.cpf,
		celphone: req.body.celphone,
		address: {
			cep: req.body.cep,
			street: req.body.street,
			number: req.body.number_delivery,
			city: req.body.city,
			neightborhood: req.body.neightborhood
		}
	}

	Customer
		.findById(req.params.id)
		.then((customer) => {
			if (!customer) {
				return res.redirect('/')
			}

			customer.password = req.body.password

			customer.setPassword(customer.password, (error, updated, passErr) => {
				if (error || passErr) {
					return res.redirect('/')
				}

				updated.save()

				Customer
					.findByIdAndUpdate(req.params.id, data)
					.then((updated) => {
						return res.redirect('/account/' + req.user.slug)
					})
			})
		})
		.catch((error) => {
			return res.redirect('/account/' + req.user.slug)			
		})	
}