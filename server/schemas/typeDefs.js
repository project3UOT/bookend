// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String
    createdAt: String
    title: String
    authors: [String]
    genre: [String]
    image: String
    link: String
    read: Boolean
    favourite: Boolean
  }
  input BookInput {
    bookId : String
    title: String
    authors: [String]
    genre: [String]
    image: String
    link: String
    read: Boolean
    favourite: Boolean
  }
  input BookUpdateReadInput {
    bookId : String
    read: Boolean
  }
  input BookUpdateFavouriteInput {
    bookId : String
    favourite: Boolean
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    updateBookRead(book: BookUpdateReadInput!): User
    updateBookFavourite(book: BookUpdateFavouriteInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
