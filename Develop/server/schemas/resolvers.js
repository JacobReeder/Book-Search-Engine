//TODO: Define the query and mutation functionality to work with the Mongoose models
//Use the functions in user-controller as a guide-
//getSingleUser
//createUSer
//login
//saveBook
//deleteBook

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