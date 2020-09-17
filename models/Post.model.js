// models/Post.model.js

const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    content: {
      type: String,
      trim: true,
    },
    creatorId: String, //String ? ID ? Object ?
    picPath: String,
    picName: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('Post', postSchema);