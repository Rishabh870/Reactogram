const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
    default:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FixRmTT_free-high-quality-person-icon-default-profile-picture%2F&psig=AOvVaw1ArBaLWh7kAQi7HG5LjfzY&ust=1683993682448000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPi6xruT8P4CFQAAAAAdAAAAABAE',
  },
});

mongoose.model('UserModel', userSchema);
