const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const mongoose = require('mongoose');
const UserModel = mongoose.model('UserModel');

module.exports = (req, res, nxt) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'User Not Logged In' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({ error: 'user not logged in' });
    }
    const { _id } = payload;
    UserModel.findById(_id).then((dbUser) => {
      req.user = dbUser;
      nxt(); //goes to next middleware or goes to RESTAPI
    });
  });
};
