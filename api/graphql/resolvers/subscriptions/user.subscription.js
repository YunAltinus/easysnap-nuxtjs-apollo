module.exports = {
  user: {
    subscribe: (parent, args, { pubsub }) => pubsub.asyncIterator('newUser')
  }
};
