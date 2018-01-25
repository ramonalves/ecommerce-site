global.PWD_KEY = "uaokio-1joooja-asakjsajih82-1jasjadj"

const path = require('path')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const expressEjsLayouts = require('express-ejs-layouts')
const passport = require('passport')
const Customer = require('./../../models/customer')
const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const expressSession = require('express-session')

module.exports = (app) => {
	app.set('port', 3000)
	app.set('views', path.join(__dirname, './../../../build/views'))
	app.set('view engine', 'ejs')
	app.set('layout extractScripts', true)
	app.set('layout extractStyles', true)

	app.use(express.static(path.join(__dirname, './../../../build')))
	app.use(express.static(path.join(__dirname, './../../../bower_components')))

	app.use(expressEjsLayouts)
	app.use(bodyParser.json())
	app.use(bodyParser.urlencoded({ extended: false }))
	app.use(morgan('dev'))
	app.use(methodOverride('_method'))
	app.use(expressSession({
		secret: 'hasja00aq#2821@',
		resave: false,
		saveUninitialized: true
	}))	
	app.use(passport.initialize())
	app.use(passport.session())

	passport.use(new LocalStrategy(Customer.authenticate()))
	passport.serializeUser(Customer.serializeUser())
	passport.deserializeUser(Customer.deserializeUser())

	// mongoose.connect('mongodb://localhost:27017/light_lawliet')
	mongoose.Promise = global.Promise;
	mongoose.connect('mongodb://rsouza:Ramon2017@ds241025.mlab.com:41025/light-lawliet', { useMongoClient: true }, function (err) {
		if (err) {
			console.log('Mongoose error connection => ', err);
		}
	
		console.log('Mongoose connected');
	});
}