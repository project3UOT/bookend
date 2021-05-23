import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        createdAt
        title
        authors
        genre
        image
        link
        read
        favourite
      }
    }
  }
`;