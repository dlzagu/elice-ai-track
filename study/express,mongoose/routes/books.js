const { Router } = require("express");
const { Book } = require("../models");

const router = Router();

// 책 추가에 대한 POST 요청을 처리하는 라우터를 만드세요.
router.post("/", async (req, res) => {
  const { title, author } = req.body;
  const book = await Book.create({ title, author });

  res.json(book);
});

// 책 검색에 대한 GET 요청을 처리하는 라우터를 만드세요.
router.get("/", async (req, res) => {
  const books = await Book.find({});

  res.json(books);
});

module.exports = router;
