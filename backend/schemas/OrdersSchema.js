const Schema=require("Schema")

const HoldingsSchema=new Schema({
        name:String,
        qty:Number,
        price:Number,
        mode:String
})