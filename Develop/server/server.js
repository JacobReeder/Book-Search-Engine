//TODO: Implement the Apollo Server and apply it to the Express server as middleware.

const path = require('path');
const express = require('express');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

////TODO: Add Middleware

// import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers
});



app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });
  
  db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
      })
    })
  };
  
  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);


/////Code below already included

//app.use(routes);

//db.once('open', () => {
//  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
//});
