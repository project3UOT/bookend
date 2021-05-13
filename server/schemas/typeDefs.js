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
  savedBooks: [Book]
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
    saveBook(bookData: bookInput!): User
    removeBook(bookId: ID!): User
  }
  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    title: String!
    image: String
    link: String
  }
  input bookInput {
    bookId : String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  } 
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
