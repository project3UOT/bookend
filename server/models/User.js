const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// NEED TO IMPORT SCHEMA FROM MODELS
const bookSchema = require('./Book');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set savebooks to be an array of data
    completedBooks: [bookSchema],
    booksToRead: [bookSchema],
    addBook: [booksToRead],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// query a user will also get another field called bookcount for number of saved books
userSchema.virtual('bookCount').get(function () {
  return this.completedBooks.length;
});

userSchema.virtual('toReadBookCount').get(function () {
  return this.booksToRead.length;
});

userSchema.virtual('').get(function () {
  return this.booksToRead.length;
});

const User = model('User', userSchema);

module.exports = User;
