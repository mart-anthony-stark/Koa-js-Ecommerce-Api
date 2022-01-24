const Router = require("@koa/router");
const rootController = require("../controllers/root.controller");

const router = new Router();

router.get("/", rootController.index);

module.exports = router;
