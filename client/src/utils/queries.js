import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
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
`;