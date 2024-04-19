const mongoose = require("mongoose");
const SellInfoSchema = new mongoose.Schema({
  clientId: {
    type: String,
    require: true,
  },
  clientInfo: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'ClientInfo'
  },
  previousDue: {
    type: Number,
    require: true,
  },
  currentDue: {//grandTotal+previousDue-pay
    type: Number,
    require: true,
  },
  vat: {
    type: Number,
    default: 0,
  },
  serviceCharge: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
    require: true,
  },
  total: {//all product
    type: Number,
    require: true,
  },
  grandTotal: {//after calculating  total+vat-discount+serviceCharge
    type: Number,
    require: true,
  },
  pay: {
    type: Number,
    require: true,
  },
  sellingDate: {
    type: String,
    require: true,
  },
  sellingProducts: [
    {
      productId: {
        type: String,
        require: true,
      },
      productName: {
        type: String,
        require: true,
      },
      mrp: {
        type: Number,
        require: true,
      },
      quantity: {
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
      }
    }
  ]
}, { timestamps: true });
module.exports = sellInfo = mongoose.model("SellInfo", SellInfoSchema);
