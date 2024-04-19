const mongoose = require("mongoose");
const ProductInfoSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: true,
  },
  productMRP: {
    type: Number,
    require: true,
  },
  unit: {
    type: String,
    default: "PCS",
  },
  warranty: {
    type: String,
    default: "No",
  },
}, { timestamps: true });
module.exports = ProductInfo = mongoose.model("ProductInfo", ProductInfoSchema);
