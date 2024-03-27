import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  user: { // references the user who likes the post
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likePost: { // references the post liked
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  timestamp: { // tracks the time the post was liked by the user
    type: Date,
    default: Date.now,
  },
});

const commentSchema = new mongoose.Schema(
  {
    user: { // references the user who comments
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: { // the comment written
      type: String,
      max: 50, 
      required: true,
    },
    commentPost: { //References the post
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    timestamp: {// Time of comment by the user
      type: Date,
      default: Date.now,
    },
  }
);

const postItem = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    description: { // description of image
      type: String,
      max: 200,
      required: true,
    },
    brand: { // brand of item (e.g Ikea, Wayfair...)
      type: String,
      max: 100,
      required: true,
    },
    height: { // Height of item
      type: String,
      max: 100,
      required: true,
    },
    width: { // Width of item
      type: String,
      max: 100,
      required: true,
    },
    color: { // Color of item
      type: String,
      max: 100,
      required: true,
    },
    material: { // (e.g. plastic, leather...)
      type: String,
      max: 100,
      required: true,
    },
    available: { // availibilty status
      type: Boolean,
      default: true,
    },
    timestamp: { // time when post was created
      type: Date,
      default: Date.now,
    },
    userCreated: { // references the user who created the post
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userAcquired: { // references teh User who aqcuires the item
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
  }
);

const Post = mongoose.model('Post', postItem);
const Comment = mongoose.model('Comment', commentSchema);
const Like = mongoose.model('Like', likeSchema);

export { Post, Comment, Like };

