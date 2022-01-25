const User = require("../models/User.model");
const { createToken } = require("../utils/token");
const bcrypt = require("bcryptjs");

const register = async (ctx) => {
  try {
    const { username, email, password } = ctx.request.body;
    const user = new User({ username, email, password });

    await user.save();
    ctx.status = 200;
    ctx.body = { user };
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = { error, message: error.errmsg };
  }
};

const login = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;
    const user = await User.findOne({ email });
    if (!user) {
      ctx.status = 404;
      ctx.body = { message: "User not found" };
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        ctx.status = 401;
        ctx.body = { message: "Invalid password" };
      } else {
        const { password, ...rest } = user._doc;
        const token = createToken(user);
        ctx.status = 200;
        ctx.body = { user: rest, token };
      }
    }
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = { error, message: error.errmsg };
  }
};

module.exports = { register, login };
