const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  img: String,
  quantity: Number,
  department: String,
  keywords: Array,
});

module.exports = ProductSchema;
