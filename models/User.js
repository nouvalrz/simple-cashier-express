const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ['admin', 'employee'],
        required: true
    },
    created_at:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.models.User || mongoose.model('User', User);
