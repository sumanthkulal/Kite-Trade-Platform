// 1. Destructure 'model' from mongoose
const { model } = require("mongoose"); 

// 2. Import the Schema we just fixed above
const { OrdersSchema } = require("../schemas/OrdersSchema");

// 3. Create the model
const OrdersModel = model("order", OrdersSchema);

// 4. Export it
module.exports = { OrdersModel };