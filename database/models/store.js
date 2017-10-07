const mongoose = require('mongoose');
const ProductSchema = require('./product');

const { Schema } = mongoose;

const StoreSchema = new Schema({
  name: String,
  description: String,
  products: [ProductSchema],
  image: String,
});

module.exports = StoreSchema;
