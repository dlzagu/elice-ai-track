const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.use(express.static("public"));
app.listen(PORT, () => {
  console.log("Example app listening on port");
});
