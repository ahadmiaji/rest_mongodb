const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  title: {
    type: String,
    reuire: true,
  },
  first: {
    type: String,
    reuire: true,
  },
  middle: {
    type: String,
    require: true,
  },
  last:{
    type : String,
    require: true,
  },
  productId :{
    type : mongoose.Types.ObjectId,
    ref: 'product',
    require: true,
  },
  numberShipped :{
    type : Number,
    require: true,
  },
  orderDate :{
    type: Date,
    default: Date.now(),
  },
 
});

module.exports = mongoose.model("order", orderSchema);