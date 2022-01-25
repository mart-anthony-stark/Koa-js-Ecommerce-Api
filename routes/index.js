const combineRouters = require("koa-combine-routers");
const rootRouter = require("./root.route");
const authRouter = require("./auth.route");
const userRouter = require("./user.route");

const router = combineRouters(rootRouter, authRouter, userRouter);

module.exports = router;
