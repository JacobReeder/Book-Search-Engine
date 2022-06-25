// import the gql tagged template function
const { gql } = require('apollo-server-express');


/**type Query {
    me: User 
    users: [User]
    user(username: String!);
  }
`; */

// create our typeDefs
const typeDefs = gql`
type Query {
    helloWorld: String
  }
`;


// export the typeDefs
module.exports = typeDefs;