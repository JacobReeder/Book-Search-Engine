//TODO: Define the query and mutation functionality to work with the Mongoose models

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };
  
  module.exports = resolvers;