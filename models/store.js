const mongoose = require('mongoose');
const ProductSchema = require('./product');

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: String,
  description: String,
  products: [ProductSchema],
});

module.exports = StoreSchema;
