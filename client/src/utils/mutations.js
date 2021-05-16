import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation ($book: BookInput!) {
  saveBook(book: $book) {
    _id
    username
    email
    bookCount
    savedBooks {
        bookId
        title
        authors
        genre
        image
        link
    }
  }
}`;

export const REMOVE_BOOK = gql`
mutation ($bookId: ID!) {
  removeBook (bookId: $bookId) {
    _id
    username
    bookCount
    savedBooks {
      bookId
        title
        authors
        description
        image
        link
        read
        favourite
    }
  }
}`;