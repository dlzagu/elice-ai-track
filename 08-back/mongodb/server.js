const express = require("express");
const contactRouter = require("./routes/contact");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const connectionString = "mongodb://localhost:27017";

async function main() {
  await mongoose.connect(connectionString);
}

main().catch((err) => console.log(err));

app.use("/contact", contactRouter);

app.listen(4001, () => {
  console.log("The server is running!");
});
