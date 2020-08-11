const { withFilter } = require('apollo-server');

module.exports = {
  snap: {
    subscribe: withFilter(
      (parent, args, { pubsub }) => pubsub.asyncIterator('newSnap'),
      (payload, variables) => {
        return variables.user_id
          ? String(payload.snap.user_id) === variables.user_id
          : true;
      }
    )
  }
};
