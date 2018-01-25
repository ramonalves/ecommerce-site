module.exports = (req, res, next) => {
	if (req.user) {
		return next()
	}

	return res.redirect('/account?next=/cart/'+req.session.cart_id)
}