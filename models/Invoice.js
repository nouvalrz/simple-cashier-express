const mongoose = require('mongoose');
const Item = require('./Item');

const Invoice = new mongoose.Schema({
    invoice_number : {
        type: String,
        required: true
    },
    created_by : {
        type: String,
        required: true
    },
    created_at : {
        type: Date,
        required : true
    },
    updated_at : {
        type: Date,
        required: false
    },
    deleted_at : {
        type: Date,
        required: false
    },
    total_item : {
        type: Number,
        required : true
    },
    total_price : {
        type: Number,
        required : true
    },
    pay : {
        type: Number,
        required : true
    },
    change : {
        type: Number,
        required : true
    },
    items : [Item]
})

module.exports = mongoose.model('Invoice', Invoice)
