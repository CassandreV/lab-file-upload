const express = require('express');
const router = express.Router();

const fileUploader = require('../configs/cloudinary.config.js')

const Post = require('../models/Post.model');

router.get('/new-post', (req, res, next) => {
  res.render('post/post-form')
})

router.post('/new-post', (req, res, next) => {
  console.log('New post OK')
})

router.get('/posts', (req, res, next) => {
  res.render('post/all-posts')
})

router.get('/post-detail', (req, res, next) => {
  res.render('post/post-details')
})

module.exports = router;