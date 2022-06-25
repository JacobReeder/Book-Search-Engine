// import the gql tagged template function
const { gql } = require('apollo-server-express');




// create our typeDefs
const typeDefs = gql`
type Query {
    helloWorld: String
  }

  type Query {
    me: User 
    users: [User]
    user(username: String!);
  }

  type Mutation {
    login(email, password: Auth?)  --returns Auth type
    addUser(username, password, email: Auth?) --returns Auth type
    saveBook
  }

  type User {
    _id
    username
    email
    bookCount
    savedBooks
  }

  type Book {
    bookId
    authos
    description
    title
    image
    link
  }

  type Auth {
    token
  }
`;




// export the typeDefs
module.exports = typeDefs;