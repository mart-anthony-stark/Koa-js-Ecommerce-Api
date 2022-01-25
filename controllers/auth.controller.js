const User = require("../models/User.model");

const register = async (ctx) => {
  console.log(ctx.request.body);
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

module.exports = { register };
