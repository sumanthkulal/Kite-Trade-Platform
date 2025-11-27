const mongoose=require("mongoose")
const Schema = mongoose.Schema

const HoldingsSchema=new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
})

module.exports = HoldingsSchema;