import mongoose from 'mongoose';

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
    timestamp: {// Date of comment
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
      max: 50,
      required: true,
    },
    likes: [ // an array that tracks likes with reference to each user who liked the post
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
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
    comments: [commentSchema], // an array of comments
  }
);

const Post = mongoose.model('Post', postItem);

export default Post;
