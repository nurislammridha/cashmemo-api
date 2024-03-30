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
  currentDue: {
    type: Number,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  },
  grandTotal: {
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
      }
    }
  ]
}, { timestamps: true });
module.exports = sellInfo = mongoose.model("SellInfo", ClientInfoSchema);
