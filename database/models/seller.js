const mongoose = require('mongoose');

const { Schema } = mongoose;

const SellerSchema = new Schema({
  googleID: String,
  name: String,
  // Add validation to email & password
  email: String,
  password: String,
  stores: [{
        type: Schema.Types.ObjectId,
        ref: "Stores"
    }]
});

const Seller = mongoose.model('seller', SellerSchema);

module.exports = Seller;

