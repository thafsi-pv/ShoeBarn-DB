const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  isAvailable: Boolean,
});

module.exports = mongoose.model("Products", productSchema);
