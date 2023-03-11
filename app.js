//import
//import mongoose from "mongoose";
const express = require("express");
const app = express();
require("dotenv/config");

const cors = require("cors");
const { default: mongoose } = require("mongoose"); //imported mongoose

app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  return res.json("Hey there....");
});

//user authentication route
const userRoute = require("./routes/auth");
app.use("/api/users/", userRoute);

// If any depreciation warning add depreciation options
// mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true }, () => {
//   console.log("Mongodb Connected");
// });

//this helps mongoDB to connect with mongoose
mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log("ERROR : ${error}");
  });
// const connect = () => {
//   mongoose
//     .connect(process.env.DB_STRING)
//     .then(() => {
//       console.log("Connected");
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

app.listen(4000, () => {
  console.log("Listening to port 4000");
  //connect();
  // console.log("Co");
});

//mongoose package is added to connect the database
