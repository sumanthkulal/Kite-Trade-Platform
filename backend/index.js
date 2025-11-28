const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3003;
const uri = process.env.MONGO_URL;

const app = express();

const cors = require("cors");

app.use(cors());

const bodyParser=require("body-parser")
app.use(bodyParser.json())

// Models
const HoldingsModel = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");


// ---------- CONNECT TO DB THEN START SERVER ----------

app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingsModel.find({})
    res.json(allHoldings)
   
})

app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionsModel.find({})
    res.json(allPositions);
})
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
