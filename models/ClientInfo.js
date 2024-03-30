const mongoose = require("mongoose");
const ClientInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  due: {
    type: Number,
    default: 0,
    require: false,
  },
}, { timestamps: true });
module.exports = clientInfo = mongoose.model("ClientInfo", ClientInfoSchema);
