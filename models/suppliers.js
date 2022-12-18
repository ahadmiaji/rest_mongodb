const mongoose = require("mongoose");

const supplierSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  name: {
    type: String,
    reuire: true,
  },
});

module.exports = mongoose.model("supplier", supplierSchema);