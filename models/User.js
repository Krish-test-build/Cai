const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  name: String,
  profilePicture: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
