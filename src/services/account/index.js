module.exports = (req, res) => {
	if (!req.user) {
		return res.render('account/index', {
			title: 'Login',
			layout: 'layouts/main',
			user: req.user || undefined,
			next: req.query.next || undefined
		})
	}

	return res.redirect('/account/' + req.user.slug)
}