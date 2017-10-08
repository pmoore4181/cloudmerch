const mongoose = require('mongoose');
const ProductSchema = require('./product');

const { Schema } = mongoose;

const StoresSchema = new Schema({
  name: String,
  description: String,
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Products"
  }],
  _seller: {
    type: Schema.Types.ObjectId,
    ref: "Sellers"
  },
  image: String
});

const Stores = mongoose.model("stores", StoresSchema);

module.exports = Stores;
