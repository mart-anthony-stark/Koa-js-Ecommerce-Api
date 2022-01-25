const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  let user = this;
  const costFactor = 10;
  const salt = await bcrypt.genSalt(costFactor);

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, salt);
  }
  await next();
});

module.exports = mongoose.model("User", userSchema);
