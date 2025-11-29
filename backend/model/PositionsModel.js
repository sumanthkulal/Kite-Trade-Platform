const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema"); 

const PositionsModel = model("position", PositionsSchema);

// ✅ CORRECT: Export as an object
module.exports = { PositionsModel };