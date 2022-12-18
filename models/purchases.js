const mongoose = require("mongoose");

const purchaseSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  supplierId: {
    type: mongoose.Types.ObjectId,  //
    ref: 'supplier',
    require: true,
  },
  productId: {
    type: mongoose.Types.ObjectId,
    ref: 'product',
    require: true,
  },
  numberReceived: {
    type: Number,
    require: true,
  },
  purchaseDate:{
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("purchase", purchaseSchema);