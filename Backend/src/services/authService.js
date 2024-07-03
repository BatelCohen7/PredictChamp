const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return token;
};

exports.signup = async (name, email, password, confirmPassword, birthdate) => {
  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }
  const user = new User({ name, email, password, birthdate });
  await user.save();
};
