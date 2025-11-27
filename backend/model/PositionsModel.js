const mongoose = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("position", PositionsSchema);

module.exports = PositionsModel;
