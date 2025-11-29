const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
});

// You MUST export this so other files can use it
module.exports = { OrdersSchema };