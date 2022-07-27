// const fs = require("fs");

// fs.readFile("./text.txt", { encoding: "utf-8" }, (err, result) => {
//   console.log(result);
// });

const fs = require("fs").promises;

fs.readFile("./text.txt", { encoding: "utf-8" })
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
