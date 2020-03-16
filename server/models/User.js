const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please input a name.']
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address.'],
        unique: true,
        lowercase: true
    },
    avatar: {
        type: String,
        required: false
    },
    password: {
        type: String, 
        required: [true, 'Please input a password.'],
        minlength: 8
    }
})
const User = mongoose.model('User', userSchema);

module.exports = User;