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
			neightborhood: req.body.neightborhood,
			uf: req.body.uf
		}
	}
	Customer.register(data, req.body.password, (error, account) => {
		Customer.authenticate()(data.email, req.body.password, (error, user, opts) => {
			if (error || user == false) {
				return res.redirect('/account')
			}
	
			return req.login(user, (error) => {
				if (error) {
					return res.redirect('/account')
				}
				return res.redirect(req.body.next || '/')
			})
		})
	})
}