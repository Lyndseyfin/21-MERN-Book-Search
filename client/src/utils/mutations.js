import gql from 'graphql-tag';

// login user to get token, id and username
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {  
    user {
        _id
        userName
        email
        bookCount
        savedBooks {
          description
          title
          bookId
          image
          link
          authors
        }
      }
    }
  }
`;


export const SAVE_BOOK = gql`
  mutation saveBook($bookData: BookInput!) {
    saveBook(bookData: "$BookData!") {
        _id
        username
        email
        savedBooks {
            bookId
            title
            authors
            description
            image
            link
        }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId
            title
            authors
            description
            image
            link
        }
    }
  }
`;