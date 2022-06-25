// import the gql tagged template function
const { gql } = require('apollo-server-express');




// create our typeDefs
const typeDefs = gql`

  type Query {
    me: User 
    users: [User]
    user(username: String!);
  }

  type Mutation {
    login(email, password: Auth?):  --returns Auth type
    addUser(username, password, email: Auth?): --returns Auth type
    saveBook:
  }

   type removeBook {
    Accepts a book's bookId as a parameter; returns a User type.
   }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: (This will be an array of the Book type.)
  }

  type Book {
    bookId: ID
    author: (An array of strings, as there may be more than one author.)
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token
  }
`;




// export the typeDefs
module.exports = typeDefs;