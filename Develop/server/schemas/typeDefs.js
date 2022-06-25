//const { bookSchema, User } = require('../models');
const { gql } = require('apollo-server-express');



const typeDefs = gql`

  type Query {
    me: User 
    users: [User]
    user(username: String!); User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, password; String!, email: String!): Auth
    saveBook(bookInput: BookInput): User
    removeBook(bookId: ID!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  input BookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String
    link: String
    title: String!
}

  type Auth {
    token: ID!
    user: User
  }
`;




// export the typeDefs
module.exports = typeDefs;