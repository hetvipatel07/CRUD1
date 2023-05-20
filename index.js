const express = require("express");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/CRUD");

const user_route = require("./routes/userRoute");
app.use("/api", user_route);


app.listen(6060, function(){
   console.log("ur connection is ready to pair");
});
