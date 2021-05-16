// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
  _id: ID!
  username: String!
  email: String!
  password: String
  bookCount: Int
  completedBooks: [Book]
  booksToRead: [Book]
}
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(bookData: bookInput!): User
    addToCompletedBooks(bookData: ID!): User
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
    genre: [String!]
    liked: Boolean
  }
  input bookInput {
    bookId : String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
    genre: [String!]
    liked: Boolean
  } 
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
