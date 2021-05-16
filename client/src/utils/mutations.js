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

export const ADD_TO_BOOKSHELF = gql`
  mutation addToBookshelf($bookData: bookInput!) {
    addToBookshelf(bookData: $bookData) {
            _id
            username
            email
            booksToRead {
                bookId
                authors
                description
                title
                image
                link
                genre
          }
  }
}
`;

export const ADD_TO_COMPLETED_BOOKS = gql`
mutation addToCompletedBooks($bookData: ID!) {
  addToCompletedBooks(bookData: $bookId) {
          _id
          username
          email
          completedBooks {
              bookId
              authors
              description
              title
              image
              link
              genre
        }
}
}
`;

export const BOOKS_TO_READ = gql`
  mutation booksToRead($bookId: ID!) {
    booksToRead(bookData: $bookId) {
        _id
        username
        email
        booksToRead {
            bookId
            authors
            description
            title
            image
            link
            genre
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($bookData: bookInput!) {
    addBook(bookData: $bookData) {
            _id
            username
            email
            password
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
                genre
          }
  }
}
`;



