const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own
// model but we'll use it as the schema for the User's 
//`savedBooks` array in User.js

const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  genre: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  read: {
    type: Boolean,
    default: false,
    required: true
  },
  favourite: {
    type: Boolean,
    default: false,
    required: true
  }
});

module.exports = bookSchema;
