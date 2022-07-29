const express = require("express");
const mongoose = require("mongoose");

// 책을 추가하고 검색하는 라우터를 불러와서 "/books" 경로에 등록하세요.
const booksRouter = require("./routes/books");

const app = express();

// mongoose를 이용해 MongoDB와 연결합니다.
mongoose.connect("mongodb://localhost:27017/myLibrary");

// body praser 미들웨어를 app에 추가합니다.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("root page");
});

app.use("/books", booksRouter);

app.listen(8080);
