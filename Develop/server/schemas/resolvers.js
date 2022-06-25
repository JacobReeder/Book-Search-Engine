//TODO: Define the query and mutation functionality to work with the Mongoose models

const resolvers = {
    Query: {
      helloWorld: () => {
        return 'Hello world!';
      }
    }
  };

  User: async (parent, { username }) => {
    const params = username ? { username } : {};
    return User.find(params).sort({ createdAt: -1 });
  }
  
  module.exports = resolvers;