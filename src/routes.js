module.exports = (app) => {
	app.use('/', require('./routes/main'))
	app.use('/account', require('./routes/account'))
	app.use('/categorias', require('./routes/category'))	
	app.use('/produtos', require('./routes/product'))	
	app.use('/produtos-rastreados', require('./routes/crawler-product'))	
	app.use('/cart', require('./routes/cart'))
	app.use('/order', require('./routes/order'))
}