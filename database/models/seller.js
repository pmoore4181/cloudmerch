const mongoose = require('mongoose');
const StoreSchema = require('./store');

const { Schema } = mongoose;

const SellerSchema = new Schema({
  googleID: String,
  name: String,
  // Add validation to email & password
  email: String,
  password: String,
  store:
  [StoreSchema],
});

mongoose.model('seller', SellerSchema);
