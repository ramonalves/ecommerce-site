const mongoose = require('mongoose')

const Category = new mongoose.Schema({
	name: {
		type: String,
        required: true,
        trim: true
	},
	description: {
		type: String,
        default: '',
        trim: true
	},
	slug: {
		type: String,
        required: true,
        trim: true
	},
	enable: {
		type: Boolean,
		required: true,
		default: true
	},
	created: {
		type: Date,
		required: true,
		default: new Date()
	}
})

module.exports = mongoose.model('Category', Category)