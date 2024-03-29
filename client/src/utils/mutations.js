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

export const UPDATE_BOOK_READ = gql`
mutation ($book: BookUpdateReadInput!) {
  updateBookRead(book: $book) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      title
      read
      favourite
    }
  }
}
`

export const UPDATE_BOOK_FAVOURITE = gql`
mutation ($book: BookUpdateFavouriteInput!) {
  updateBookFavourite(book: $book) {
    _id
    username
    email
    bookCount
    savedBooks {
      bookId
      title
      read
      favourite
    }
  }
}
`

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
        image
        link
        read
        favourite
    }
  }
}`;