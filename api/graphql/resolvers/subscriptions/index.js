const user = require('./user.subscription');
const snap = require('./snap.subscription');

const Subscription = {
  ...snap,
  ...user
};

module.exports = Subscription;
