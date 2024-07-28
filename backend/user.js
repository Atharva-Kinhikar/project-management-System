const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

userSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateToken = function() {
  return jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
};

const User = mongoose.model('User', userSchema);

module.exports = User;