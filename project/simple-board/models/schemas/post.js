const { Schema } = require("mongoose");
const shortId = require("./types/short-id");

const PostSchema = new Schema(
  {
    shortId,
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
      // index 추가하기 (검색 기능 최적화)
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PostSchema;
