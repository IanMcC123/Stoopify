import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    sender: { // References the user who sends the message
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    receiver: { // References the user who receives the message 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: { // The message itself
      type: String,
      required: true,
    },
    conversation: {  // References the conversation
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Conversation',
      required: true,
    },
    timestamp: { // Tracks the time the message was sent or recieved
      type: Date,
      default: Date.now,
    },
  }
);

const conversationSchema = new mongoose.Schema({
  participants: [{ // an array of participants [logged in user, other user]
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }],
  timestamp: { // Tracks the time of the conversation
    type: Date,
    default: Date.now,
  },
  archive: { // Checks whether the conversation has been archived
    type: Boolean,
    default: true,
  },
});

const Conversation = mongoose.model('Conversation', conversationSchema);
const Message = mongoose.model('Message', messageSchema);

export { Conversation, Message };