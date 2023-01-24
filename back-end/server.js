const express = require("express");
const colors = require("colors");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const cors = require('cors');
const router = require("./routes/bird-routes");
const port = process.env.PORT || 8000;

//config DB
connectDB()

//middlewares
app.use(express.json())
app.use(cors())
app.use('/birds', router)


//config server



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`.blue)
})  
