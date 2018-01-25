const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Customer = new mongoose.Schema({
	name: {
		type: String,
        required: true,
        trim: true
	},
	slug: {
		type: String,
        required: true,
        trim: true
	},
	email: {
		type: String,
        required: true,
        trim: true
	},
	password: {
        type: String,        
        trim: true
    },
    cpf: {
        type: String,
        required: true,
        trim: true
	},
	celphone: {
		type: String,
		required: true,
        trim: true
	},
	address: {
        cep: {
            type: String,
            required: true
        },
		street: {
			type: String,
			required: true
		},
		number: {
			type: Number,
			required: true
		},
		city: {
			type: String,
			required: true
		},
		neightborhood: {
			type: String,
			required: true
        },
        uf: {
            type: String,
			required: true
        }
	}
})

Customer.plugin(passportLocalMongoose, { usernameField: 'email'})
module.exports = mongoose.model('Customer', Customer)