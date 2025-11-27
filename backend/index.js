const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3003;
const uri = process.env.MONGO_URL;

const app = express();

// Models
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");

// ---------- ROUTE ----------
// app.get("/addPosition", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   try {
//     await PositionsModel.insertMany(tempPositions);
//     res.send("Positions added!");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error adding positions");
//   }
// });

// ---------- CONNECT TO DB THEN START SERVER ----------
mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () =>
      console.log("SERVER STARTED on " + PORT)
    );
  })
  .catch((err) => {
    console.log("DB Connection Error:", err.message);
  });
