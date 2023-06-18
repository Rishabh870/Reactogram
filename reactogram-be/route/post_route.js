const mongoose = require('mongoose');
const express = require('express');
const PostModel = mongoose.model('PostModel');
const router = express.Router();

const protectedRoute = require('../middleware/protectedResource');

// all user post
router.get('/allposts', (req, res) => {
  PostModel.find()
    .populate('author', '_id fullName profileImg')
    .then((dbPosts) => {
      res.status(200).json({ posts: dbPosts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// all login user post
router.get('/myallposts', protectedRoute, (req, res) => {
  PostModel.find({ author: req.user._id })
    .populate('author', '_id fullName profileImg')
    .then((dbPosts) => {
      res.status(200).json({ posts: dbPosts });
    })
    .catch((err) => {
      console.log(err);
    });
});

//create post
router.post('/createpost', protectedRoute, (req, res) => {
  const { description, location, image } = req.body;
  if (!description || !location || !image) {
    return res.status(400).json({
      error: 'One or more mandatory fields are empty',
    });
  }
  req.user.password = undefined;
  const postObj = new PostModel({
    description: description,
    location: location,
    image: image,
    author: req.user,
  });
  postObj
    .save()
    .then((newPost) => {
      return res.status(201).json({
        post: newPost,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//delete post
router.delete('/deletepost/:postId', protectedRoute, (req, res) => {
  PostModel.findOne({ _id: req.params.postId })
    .populate('author', '_id')
    .then((foundPost) => {
      if (!foundPost) {
        return res.status(400).json({ error: 'Post Doesn`t Exist' });
      }
      //check if post author is same as logged user only then allow delete
      if (foundPost.author._id.toString() === req.user._id.toString()) {
        foundPost
          .deleteOne({ _id: foundPost._id })
          .then((data) => {
            res.status(200).json({ result: data });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put('/like', protectedRoute, (req, res) => {
  PostModel.findByIdAndUpdate(
    req.body.postId,
    { $push: { likes: req.user._id } },
    {
      new: true, //return updtaed record
    }
  )
    .populate('author', '_id fullName')
    .then((err, result) => {
      if (result) {
        res.json(result);
      } else {
        return res.status(400).json({ error: err });
      }
    });
});

router.put('/unlike', protectedRoute, (req, res) => {
  PostModel.findByIdAndUpdate(
    req.body.postId,
    { $pull: { likes: req.user._id } },
    {
      new: true, //return updtaed record
    }
  )
    .populate('author', '_id fullName')
    .then((err, result) => {
      if (result) {
        res.json(result);
      } else {
        return res.status(400).json({ error: err });
      }
    });
});

module.exports = router;
