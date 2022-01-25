const jwt = require("jsonwebtoken");

const createToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "3d" });
};

const isAuth = (req, res, next) => {};

module.exports = { createToken };
