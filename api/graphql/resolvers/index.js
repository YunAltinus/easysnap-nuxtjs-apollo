const Query = require('./queries/Query');
const Snap = require('./queries/Snap');
const User = require('./queries/User');

const Mutation = require('./mutations/index');
const Subscription = require('./subscriptions/index');

module.exports = {
  Query,
  Snap,
  User,
  Mutation,
  Subscription
};
