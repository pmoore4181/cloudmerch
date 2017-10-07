const mongoose = require('mongoose');
const StoreSchema = require('./store');

const Schema = mongoose.Schema;

const SellersSchema = new Schema({
    name: String,
    // Add validation to email & password
    email: String,
    password: String,
    stores: [{
        type: Schema.Types.ObjectId,
        ref: "Stores"
    }]
});

const Sellers = mongoose.model('Seller', SellersSchema);

module.exports = Sellers;