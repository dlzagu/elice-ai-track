const { Schema } = require("mongoose");

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = BookSchema;
