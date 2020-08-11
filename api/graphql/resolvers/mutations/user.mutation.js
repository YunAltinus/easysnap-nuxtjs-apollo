const token = require('../../../helpers/token');
const bcrypt = require('bcrypt');

module.exports = {
  createUser: async (
    parent,
    { data: { username, password } },
    { User, pubsub }
  ) => {
    const checkUser = await User.findOne({ username });
    if (checkUser) {
      throw new Error('User already exist');
    }

    const user = await new User({
      username,
      password
    }).save();

    // IKINCI PARAMETRE OBJE
    pubsub.publish('newUser', { user });

    return { token: token.generate(user, '1h') };
  },

  singIn: async (parent, { data: { username, password } }, { User }) => {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('User already exist man');
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new Error('Wrong password');
    }

    return { token: token.generate(user, '1h') };
  }
};
