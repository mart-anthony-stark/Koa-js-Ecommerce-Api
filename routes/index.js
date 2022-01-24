const combineRouters = require("koa-combine-routers");
const rootRouter = require("./root.route");
const userRouter = require("./user.route");

const router = combineRouters(rootRouter, userRouter);

module.exports = router;
