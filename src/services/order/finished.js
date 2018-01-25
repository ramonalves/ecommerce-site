module.exports = (req, res) => {
	return res.render('order/finished', {
		title: 'Compra Finalizada',
		layout: 'layouts/main',
		user: req.user || undefined,
	})
}