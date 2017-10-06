const mongoose = require('mongoose');
const StoreSchema = require('./store');

const Schema = mongoose.Schema;

const SellerSchema = new Schema({
    name: String,
    // Add validation to email & password
    email: String,
    password: String,
    store: 
        [StoreSchema]
    
});

const Seller = mongoose.model('seller', SellerSchema);

module.exports = Seller;