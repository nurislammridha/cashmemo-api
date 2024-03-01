const mongoose = require("mongoose");
const ProductInfoSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  productMRP: {
    type: Number,
    require: true,
  }
});
module.exports = ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
