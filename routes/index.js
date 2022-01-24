const combineRouters = require("koa-combine-routers");
const rootRouter = require("./root.route");

const router = combineRouters(rootRouter);

module.exports = router;
