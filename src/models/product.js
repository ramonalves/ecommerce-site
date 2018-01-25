const mongoose = require('mongoose')

const Product = new mongoose.Schema({
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
	image: {
        type: String,
        trim: true
	},
	slug: {
		type: String,
        required: true,
        trim: true
	},
	price: {
		type: Number,
		required: true,
		default: 0
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	},
	quantity: {
		type: Number,
		required: true,
		default: 0
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

module.exports = mongoose.model('Product', Product)