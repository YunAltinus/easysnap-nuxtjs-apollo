const jwt = require('jsonwebtoken');

module.exports = {
  generate({ username }, expiresIn) {
    return jwt.sign({ username }, process.env.JWT_KEY, {
      expiresIn
    });
  }
};
