const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('savedBooks');

            return userData;
        }
        
        throw new AuthenticationError('Not logged in');
      }         
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email: email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            console.log('logged in');

            const token = signToken(user);
            return { token, user };
        },
      saveBook: async (parent, { book }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: { ...book } } },
            { new: true, runValidators: true }
          );
          return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
      },
      updateBook: async (parent, { book }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id, "savedBooks.bookId": book.bookId },
            { $set: { 
              "savedBooks.$.read": book.read, 
              "savedBooks.$.favourite": book.favourite
            } },
            { new: true, runValidators: true }
          );
          return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
      },
      // remove a book from `savedBooks`
      removeBook: async (parent, { bookId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId: bookId } } },
            { new: true }
          );
          return updatedUser;
        }
        throw new AuthenticationError('You need to be logged in!');
      }
    }

};
  
module.exports = resolvers;
  