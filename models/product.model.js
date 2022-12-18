//productSchema
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  productname: {
    type: String,
    reuire: true,
  },
  partnumber: {
    type: Number,
    reuire: true,
  },
  productlabel: {
    type: String,
    require: true,
  },
  startinginventory:{
    type : Number,
    require: true,
  },
  inventoryreceived :{
    type : Number,
    require: true,
  },
  inventoryshipped :{
    type : Number,
    require: true,
  },
  inventoryOnHand :{
    type :Number,
    require: true,
  },
  minimumRequired : {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("product", productSchema);