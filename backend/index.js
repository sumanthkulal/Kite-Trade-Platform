const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// --- Models Imports ---
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

// FIX: Destructure { OrdersModel } to match the export in the file above
const { OrdersModel } = require("./model/OrdersModel"); 

const PORT = process.env.PORT || 3003;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ---------- ROUTES ----------

// 1. All Holdings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// 2. All Positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// 3. New Order
app.post("/newOrder", async (req, res) => {
  try {
    // FIX: ensure 'OrdersModel' matches the import name exactly
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved successfully!");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error saving order");
  }
});

// ---------- CONNECT TO DB ----------
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => console.log("SERVER STARTED on " + PORT));
  })
  .catch((err) => {
    console.log("DB Connection Error:", err.message);
  });