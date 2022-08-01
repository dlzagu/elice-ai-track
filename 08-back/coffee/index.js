// require("dotenv").config();
const express = require("express");
const app = express();
const coffeeMakerRouter = require("./routes/coffeeMakerRouter");

// console.log(process.env.SECRET_KEY);
// console.log(process.env.PORT);

app.use("/api/coffeemaker", coffeeMakerRouter);
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000);
