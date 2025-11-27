const mongoose = require("mongoose");
const HoldingsSchema = require("../schemas/HoldingsSchemas");
const HoldingsModel = mongoose.model("holding", HoldingsSchema);

module.exports = HoldingsModel;
