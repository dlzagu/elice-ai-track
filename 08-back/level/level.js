const express = require("express");
const morgan = require("morgan");
const debug = require("debug")("elice");
const app = express();

const PORT = process.env.PORT || 3000;

// disable etag generation
app.set("etag", false);

app.use(morgan("tiny"));

const static_root = "public";
const options = {
  dotfiles: "ignore", // default : ignore ( 파일명이 .xxx 인 경우, linux 에서는 히든)
  etag: false, // default: true
  extensions: ["htm", "html"], // default: false
  index: "index.html", // default" 'index.html'
};

// https://expressjs.com/en/api.html#express.static
// express.static(root, [options])

// app.use(express.static(static_root);
app.use(express.static(static_root, options));

// https://expressjs.com/en/api.html#express.urlencoded
// NOTE: This middleware is available in Express v4.16.0 onwards.
// - only parses urlencoded bodies
// - only looks at requests
//   where the Content-Type header matches the type option
// - only UTF-8 encoding of the body
// - automatic inflation of gzip and deflate encodings

// req.body:
// - A new body object containing the parsed data is populated
//   on the request object after the middleware (i.e. req.body)
// - key-value pairs
// - the value can be a string or array {extended: false}
// - or, any type {extended: false}

// {}: empty object
// - no body
// - the Content-Type was not matched
// - error occurred

app.use(express.urlencoded({ extended: false }));

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST
// http://localhost:3000/

// POST 방식으로 form 데이터를 보내기

// <form action="/" method="POST">
//      <input type="text" name="name">
//      <input type="text" name="age">
//      <button>Submit</button>
// </form>

// GET 방식으로 form 데이터를 보내기
// http://localhost:3000/api?name=Kim&age=22

app.get("/api", (req, res, next) => {
  debug("GET /api", "req.query:", req.query, "req.params:", req.params);
  res.status(200);
  res.send({ data: "hello, express!" });
});

app.use(express.json());

app.post("/api", (req, res, next) => {
  debug("POST /api", req.body);
  res.status(200);
  res.send({ data: "hello, express!" });
});

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), (req, res, next) => {
  debug("/upload - req.file", req.file);
  debug("/upload - req.body", req.body);
  res.status(200);
  res.send({ data: "Upload is complete!" });
});

app.listen(PORT, () => console.log("listening..."));
