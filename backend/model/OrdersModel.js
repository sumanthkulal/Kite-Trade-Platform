const model=require('mongoose')

const OrdersSchema=require('../schemas/OrdersSchema')
const OrdersModel=new model("oder",OrdersSchema)

module.exports={OrdersModel}