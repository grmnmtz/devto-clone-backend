const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 50,
      required: true,
    },
    title: {
      type: String,
      minLength: 4,
      maxLength: 150,
      required: true,
    },
    imageURL: {
      type: String,
      maxLength: 500,
      required: true,
    },
    content: {
      type: String,
      maxLength: 1000,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    reactions: {
      type: Number,
      required: true,
      max: 250,
    },
    avatar: {
      type: String,
      required: true,
    },
    date: Date,
  },
  { timestamps: true }
)

const Post = mongoose.model('post', postSchema)

module.exports = Post
