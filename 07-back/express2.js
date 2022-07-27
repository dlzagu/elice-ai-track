const express = require("express");

const morgan = require("morgan"); // 요청을 줄때 log 정보를 찍어줌
const debug = require("debug")("elice");
const app = express();

const PORT = process.env.PORT || 3000;

app.set("etag", false);
app.listen(PORT);
